
-- First, let's check if the profiles table exists and add missing columns
DO $$
BEGIN
    -- Add role column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'role') THEN
        ALTER TABLE public.profiles ADD COLUMN role user_role DEFAULT 'field_officer'::user_role;
    END IF;
    
    -- Add other missing columns if they don't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'region') THEN
        ALTER TABLE public.profiles ADD COLUMN region TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'sub_county') THEN
        ALTER TABLE public.profiles ADD COLUMN sub_county TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'is_active') THEN
        ALTER TABLE public.profiles ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'created_at') THEN
        ALTER TABLE public.profiles ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'profiles' AND column_name = 'updated_at') THEN
        ALTER TABLE public.profiles ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END
$$;

-- Update the handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone_number, role)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    COALESCE(new.raw_user_meta_data->>'phone_number', ''),
    COALESCE((new.raw_user_meta_data->>'role')::user_role, 'field_officer'::user_role)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admin and supervisors can view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;

-- Create new RLS policies
CREATE POLICY "Admin and supervisors can view profiles" ON public.profiles 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles p 
      WHERE p.id = auth.uid() 
      AND p.role IN ('admin', 'supervisor')
    )
  );

CREATE POLICY "Users can view own profile" ON public.profiles 
  FOR SELECT USING (auth.uid() = id);

-- Update other policies to ensure proper role-based access
DROP POLICY IF EXISTS "Supervisors can update issues" ON public.issue_reports;
CREATE POLICY "Admin and supervisors can update issues" ON public.issue_reports 
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles p 
      WHERE p.id = auth.uid() 
      AND p.role IN ('admin', 'supervisor')
    )
  );

DROP POLICY IF EXISTS "Supervisors can update transfers" ON public.transfer_requests;
CREATE POLICY "Admin and supervisors can update transfers" ON public.transfer_requests 
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles p 
      WHERE p.id = auth.uid() 
      AND p.role IN ('admin', 'supervisor')
    )
  );

DROP POLICY IF EXISTS "Supervisors can create tasks" ON public.todo_tasks;
CREATE POLICY "Admin and supervisors can create tasks" ON public.todo_tasks 
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p 
      WHERE p.id = auth.uid() 
      AND p.role IN ('admin', 'supervisor')
    )
  );
