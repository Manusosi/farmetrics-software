
-- Create enum for visit status
CREATE TYPE visit_status AS ENUM ('pending', 'in_progress', 'completed', 'incomplete');

-- Update profiles table to add supervisor relationship
ALTER TABLE profiles ADD COLUMN supervisor_id UUID REFERENCES profiles(id);
ALTER TABLE profiles ADD COLUMN zone_assignment TEXT;
ALTER TABLE profiles ADD COLUMN target_visits INTEGER DEFAULT 0;

-- Create field officer assignments table
CREATE TABLE field_officer_assignments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  field_officer_id UUID REFERENCES profiles(id) NOT NULL,
  supervisor_id UUID REFERENCES profiles(id) NOT NULL,
  region TEXT NOT NULL,
  zone TEXT,
  target_visits INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create visit schedules table
CREATE TABLE visit_schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  field_officer_id UUID REFERENCES profiles(id) NOT NULL,
  farmer_id UUID REFERENCES farmers(id) NOT NULL,
  visit_number INTEGER NOT NULL,
  scheduled_date DATE,
  status visit_status DEFAULT 'pending',
  completion_percentage DECIMAL(5,2) DEFAULT 0.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(farmer_id, visit_number)
);

-- Update farm_visits table to link with visit schedules
ALTER TABLE farm_visits ADD COLUMN visit_schedule_id UUID REFERENCES visit_schedules(id);
ALTER TABLE farm_visits ADD COLUMN completion_percentage DECIMAL(5,2) DEFAULT 0.00;

-- Create CCE (Crop Collection Event) tracking table
CREATE TABLE cce_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  harvest_id TEXT UNIQUE NOT NULL,
  farmer_id UUID REFERENCES farmers(id) NOT NULL,
  field_officer_id UUID REFERENCES profiles(id) NOT NULL,
  visit_schedule_id UUID REFERENCES visit_schedules(id),
  harvest_date DATE,
  crop_type TEXT DEFAULT 'Cocoa',
  quantity_collected DECIMAL(10,2),
  quality_grade TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on new tables
ALTER TABLE field_officer_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE visit_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE cce_records ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their assigned data" ON field_officer_assignments FOR SELECT USING (
  field_officer_id = auth.uid() OR supervisor_id = auth.uid() OR 
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'supervisor'))
);

CREATE POLICY "Users can view relevant visit schedules" ON visit_schedules FOR SELECT USING (
  field_officer_id = auth.uid() OR 
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'supervisor'))
);

CREATE POLICY "Users can view relevant CCE records" ON cce_records FOR SELECT USING (
  field_officer_id = auth.uid() OR 
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'supervisor'))
);
