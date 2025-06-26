
-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('admin', 'supervisor', 'analyst', 'field_officer');

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone_number TEXT,
  role user_role NOT NULL DEFAULT 'field_officer',
  region TEXT,
  sub_county TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create farmers table
CREATE TABLE public.farmers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone_number TEXT,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  id_type TEXT CHECK (id_type IN ('national_id', 'passport', 'none')),
  id_number TEXT,
  region TEXT NOT NULL,
  sub_county TEXT,
  farmer_photo_url TEXT,
  registered_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create farm visits table
CREATE TABLE public.farm_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  farmer_id UUID REFERENCES public.farmers(id) ON DELETE CASCADE,
  field_officer_id UUID REFERENCES public.profiles(id),
  visit_date TIMESTAMPTZ DEFAULT NOW(),
  gps_latitude DECIMAL(10, 8),
  gps_longitude DECIMAL(11, 8),
  polygon_boundaries JSONB,
  cocoa_tree_age INTEGER,
  cocoa_bean_quality TEXT,
  soil_type TEXT,
  humidity_level DECIMAL(5, 2),
  pest_disease_signs TEXT,
  visit_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create media files table for photos/videos
CREATE TABLE public.media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  farm_visit_id UUID REFERENCES public.farm_visits(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  file_type TEXT CHECK (file_type IN ('photo', 'video')),
  exif_data JSONB,
  gps_latitude DECIMAL(10, 8),
  gps_longitude DECIMAL(11, 8),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create issue reports table
CREATE TABLE public.issue_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  field_officer_id UUID REFERENCES public.profiles(id),
  issue_type TEXT NOT NULL,
  description TEXT NOT NULL,
  evidence_url TEXT,
  status TEXT CHECK (status IN ('open', 'under_review', 'resolved', 'rejected')) DEFAULT 'open',
  supervisor_comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create transfer requests table
CREATE TABLE public.transfer_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  field_officer_id UUID REFERENCES public.profiles(id),
  reason TEXT NOT NULL,
  preferred_region TEXT,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  reviewed_by UUID REFERENCES public.profiles(id),
  reviewed_at TIMESTAMPTZ,
  admin_comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create todo tasks table
CREATE TABLE public.todo_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assigned_to UUID REFERENCES public.profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('pending', 'in_progress', 'completed')) DEFAULT 'pending',
  due_date TIMESTAMPTZ,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farmers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issue_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transfer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.todo_tasks ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for farmers
CREATE POLICY "Anyone can view farmers" ON public.farmers FOR SELECT USING (true);
CREATE POLICY "Field officers can create farmers" ON public.farmers FOR INSERT WITH CHECK (true);
CREATE POLICY "Field officers can update farmers" ON public.farmers FOR UPDATE USING (true);

-- Create RLS policies for farm visits
CREATE POLICY "Anyone can view farm visits" ON public.farm_visits FOR SELECT USING (true);
CREATE POLICY "Field officers can create visits" ON public.farm_visits FOR INSERT WITH CHECK (true);
CREATE POLICY "Field officers can update visits" ON public.farm_visits FOR UPDATE USING (true);

-- Create RLS policies for media files
CREATE POLICY "Anyone can view media files" ON public.media_files FOR SELECT USING (true);
CREATE POLICY "Field officers can create media" ON public.media_files FOR INSERT WITH CHECK (true);

-- Create RLS policies for issue reports
CREATE POLICY "Anyone can view issues" ON public.issue_reports FOR SELECT USING (true);
CREATE POLICY "Field officers can create issues" ON public.issue_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Supervisors can update issues" ON public.issue_reports FOR UPDATE USING (true);

-- Create RLS policies for transfer requests
CREATE POLICY "Anyone can view transfers" ON public.transfer_requests FOR SELECT USING (true);
CREATE POLICY "Field officers can create transfers" ON public.transfer_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Supervisors can update transfers" ON public.transfer_requests FOR UPDATE USING (true);

-- Create RLS policies for todo tasks
CREATE POLICY "Users can view assigned tasks" ON public.todo_tasks FOR SELECT USING (assigned_to = auth.uid() OR created_by = auth.uid());
CREATE POLICY "Supervisors can create tasks" ON public.todo_tasks FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update assigned tasks" ON public.todo_tasks FOR UPDATE USING (assigned_to = auth.uid() OR created_by = auth.uid());

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media-files', 'media-files', true);

-- Create storage policies for media files
CREATE POLICY "Anyone can view media files" ON storage.objects FOR SELECT USING (bucket_id = 'media-files');
CREATE POLICY "Authenticated users can upload media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media-files' AND auth.role() = 'authenticated');

-- Create function to handle new user registration
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

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
