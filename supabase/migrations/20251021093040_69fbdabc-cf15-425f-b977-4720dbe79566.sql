-- Create projects table
CREATE TABLE public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  live_url text,
  github_url text,
  technologies text[] NOT NULL,
  featured boolean DEFAULT false,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  price decimal NOT NULL,
  features text[] NOT NULL,
  popular boolean DEFAULT false,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  contact_method text NOT NULL CHECK (contact_method IN ('email', 'whatsapp')),
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Projects policies (public read)
CREATE POLICY "Anyone can view projects"
  ON public.projects FOR SELECT
  USING (true);

-- Services policies (public read)
CREATE POLICY "Anyone can view services"
  ON public.services FOR SELECT
  USING (true);

-- Contact submissions policies (public insert only)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Insert sample projects
INSERT INTO public.projects (title, description, image_url, live_url, technologies, featured, display_order) VALUES
('E-Commerce Platform', 'Modern e-commerce solution with real-time inventory and seamless checkout experience.', 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800', 'https://example.com', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], true, 1),
('Healthcare Portal', 'HIPAA-compliant patient management system with appointment scheduling and telemedicine features.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', 'https://example.com', ARRAY['Next.js', 'TypeScript', 'Supabase'], true, 2),
('Real Estate Dashboard', 'Property listing platform with advanced search filters and virtual tour integration.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800', 'https://example.com', ARRAY['React', 'Tailwind', 'Firebase'], false, 3);

-- Insert sample services
INSERT INTO public.services (name, description, price, features, popular, display_order) VALUES
('Basic', 'Perfect for small businesses and startups', 999, ARRAY['Responsive Design', 'Up to 5 Pages', 'Contact Form', 'Basic SEO', '1 Month Support'], false, 1),
('Standard', 'Ideal for growing businesses', 1999, ARRAY['Everything in Basic', 'Up to 10 Pages', 'CMS Integration', 'Advanced SEO', 'Analytics Setup', '3 Months Support'], true, 2),
('Premium', 'For enterprises needing custom solutions', 3999, ARRAY['Everything in Standard', 'Unlimited Pages', 'Custom Features', 'E-Commerce Integration', 'Performance Optimization', '6 Months Support'], false, 3);