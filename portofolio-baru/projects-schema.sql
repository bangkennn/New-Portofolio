-- Schema untuk Projects Management

-- Tabel untuk Tech Stacks (daftar teknologi yang bisa dipilih)
CREATE TABLE IF NOT EXISTS tech_stacks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  icon_name VARCHAR(100) NOT NULL, -- Nama icon dari react-icons (contoh: "SiReact", "SiNextdotjs")
  color VARCHAR(50) NOT NULL, -- CSS color class (contoh: "text-blue-400")
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default tech stacks
INSERT INTO tech_stacks (name, icon_name, color) 
VALUES 
  -- Frontend Frameworks & Libraries
  ('React', 'SiReact', 'text-blue-400'),
  ('Next.js', 'SiNextdotjs', 'text-white'),
  ('Vue.js', 'SiVuedotjs', 'text-green-500'),
  ('Angular', 'SiAngular', 'text-red-500'),
  ('Svelte', 'SiSvelte', 'text-orange-500'),
  ('TypeScript', 'SiTypescript', 'text-blue-500'),
  ('JavaScript', 'SiJavascript', 'text-yellow-400'),
  ('Tailwind CSS', 'SiTailwindcss', 'text-cyan-400'),
  ('Bootstrap', 'SiBootstrap', 'text-purple-500'),
  ('Sass', 'SiSass', 'text-pink-500'),
  ('Framer', 'SiFramer', 'text-white'),
  
  -- Backend & Runtime
  ('Node.js', 'SiNodedotjs', 'text-green-500'),
  ('Express', 'SiExpress', 'text-gray-400'),
  ('Python', 'SiPython', 'text-blue-400'),
  ('Django', 'SiDjango', 'text-green-600'),
  ('Flask', 'SiFlask', 'text-black'),
  ('FastAPI', 'SiFastapi', 'text-teal-500'),
  ('Go', 'SiGo', 'text-cyan-500'),
  ('Rust', 'SiRust', 'text-orange-600'),
  ('PHP', 'SiPhp', 'text-indigo-500'),
  ('Laravel', 'SiLaravel', 'text-red-500'),
  ('Java', 'SiJava', 'text-orange-500'),
  ('Spring', 'SiSpring', 'text-green-500'),
  ('C#', 'SiCsharp', 'text-purple-500'),
  ('.NET', 'SiDotnet', 'text-blue-600'),
  ('Ruby', 'SiRuby', 'text-red-600'),
  ('Ruby on Rails', 'SiRubyonrails', 'text-red-500'),
  ('Kotlin', 'SiKotlin', 'text-purple-400'),
  ('Swift', 'SiSwift', 'text-orange-500'),
  ('Dart', 'SiDart', 'text-blue-500'),
  ('Flutter', 'SiFlutter', 'text-blue-400'),
  
  -- Programming Languages (Low Level)
  ('C', 'SiC', 'text-blue-600'),
  ('C++', 'SiCplusplus', 'text-blue-500'),
  
  -- Databases
  ('PostgreSQL', 'SiPostgresql', 'text-blue-300'),
  ('MySQL', 'SiMysql', 'text-blue-500'),
  ('MongoDB', 'SiMongodb', 'text-green-500'),
  ('Redis', 'SiRedis', 'text-red-500'),
  ('SQLite', 'SiSqlite', 'text-blue-400'),
  ('Supabase', 'SiSupabase', 'text-emerald-400'),
  ('Firebase', 'SiFirebase', 'text-orange-500'),
  
  -- Cloud & DevOps
  ('AWS', 'SiAmazonaws', 'text-orange-500'),
  ('Azure', 'SiMicrosoftazure', 'text-blue-500'),
  ('Google Cloud', 'SiGooglecloud', 'text-blue-400'),
  ('Docker', 'SiDocker', 'text-blue-500'),
  ('Kubernetes', 'SiKubernetes', 'text-blue-600'),
  ('Terraform', 'SiTerraform', 'text-purple-500'),
  ('Jenkins', 'SiJenkins', 'text-blue-600'),
  ('GitLab CI', 'SiGitlab', 'text-orange-500'),
  
  -- Version Control & Tools
  ('Git', 'SiGit', 'text-orange-600'),
  ('GitHub', 'SiGithub', 'text-white'),
  ('GitLab', 'SiGitlab', 'text-orange-500'),
  ('Bitbucket', 'SiBitbucket', 'text-blue-500'),
  
  -- Development Tools
  ('VS Code', 'SiVisualstudiocode', 'text-blue-500'),
  ('Figma', 'SiFigma', 'text-purple-500'),
  ('Postman', 'SiPostman', 'text-orange-500'),
  ('Jira', 'SiJira', 'text-blue-500'),
  ('Confluence', 'SiConfluence', 'text-blue-600'),
  
  -- Testing
  ('Jest', 'SiJest', 'text-red-500'),
  ('Cypress', 'SiCypress', 'text-gray-400'),
  ('Playwright', 'SiPlaywright', 'text-green-500'),
  
  -- Mobile Development
  ('React Native', 'SiReact', 'text-blue-400'),
  ('Ionic', 'SiIonic', 'text-blue-500'),
  ('Xamarin', 'SiXamarin', 'text-blue-600'),
  
  -- Additional Popular Tech
  ('GraphQL', 'SiGraphql', 'text-pink-500'),
  ('REST', 'SiRest', 'text-green-500'),
  ('WebSocket', 'SiWebsocket', 'text-blue-400'),
  ('Nginx', 'SiNginx', 'text-green-600'),
  ('Apache', 'SiApache', 'text-red-500'),
  ('Linux', 'SiLinux', 'text-yellow-500'),
  ('Ubuntu', 'SiUbuntu', 'text-orange-500')
ON CONFLICT (name) DO NOTHING;

-- Tabel untuk Projects
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  featured BOOLEAN DEFAULT FALSE,
  image_type VARCHAR(20) NOT NULL DEFAULT 'desktop', -- desktop, mobile, multiple
  image_url TEXT, -- URL gambar project (bisa dari Supabase Storage)
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel untuk relasi many-to-many antara Projects dan Tech Stacks
CREATE TABLE IF NOT EXISTS project_tech_stacks (
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  tech_stack_id INTEGER NOT NULL REFERENCES tech_stacks(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, tech_stack_id)
);

-- Insert dummy data untuk projects
INSERT INTO projects (name, description, slug, featured, image_type, "order") 
VALUES 
  (
    'satriabahari.my.id',
    'Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.',
    'satriabahari-my-id',
    TRUE,
    'desktop',
    1
  ),
  (
    'Berbagi.link',
    'Berbagi.link is a mini-website platform for online businesses but lacks mobile functionality. This project adds a complete mobile app experience.',
    'berbagi-link',
    TRUE,
    'multiple',
    2
  ),
  (
    'Presensi Internal System',
    'Internal attendance system for employees with real-time tracking and reporting features.',
    'presensi-internal-system',
    FALSE,
    'mobile',
    3
  ),
  (
    'ROBUST',
    'A comprehensive platform with membership, merchandise, job listings, and more.',
    'robust',
    FALSE,
    'desktop',
    4
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert relasi project-tech stacks untuk project pertama
INSERT INTO project_tech_stacks (project_id, tech_stack_id)
SELECT p.id, ts.id
FROM projects p, tech_stacks ts
WHERE p.slug = 'satriabahari-my-id'
  AND ts.name IN ('TypeScript', 'Tailwind CSS', 'Next.js', 'Framer', 'Supabase', 'PostgreSQL')
ON CONFLICT DO NOTHING;

-- Insert relasi project-tech stacks untuk project kedua
INSERT INTO project_tech_stacks (project_id, tech_stack_id)
SELECT p.id, ts.id
FROM projects p, tech_stacks ts
WHERE p.slug = 'berbagi-link'
  AND ts.name IN ('React', 'Next.js', 'TypeScript')
ON CONFLICT DO NOTHING;

-- Insert relasi project-tech stacks untuk project ketiga
INSERT INTO project_tech_stacks (project_id, tech_stack_id)
SELECT p.id, ts.id
FROM projects p, tech_stacks ts
WHERE p.slug = 'presensi-internal-system'
  AND ts.name IN ('Next.js', 'TypeScript', 'Node.js')
ON CONFLICT DO NOTHING;

-- Insert relasi project-tech stacks untuk project keempat
INSERT INTO project_tech_stacks (project_id, tech_stack_id)
SELECT p.id, ts.id
FROM projects p, tech_stacks ts
WHERE p.slug = 'robust'
  AND ts.name IN ('Next.js', 'TypeScript', 'Tailwind CSS')
ON CONFLICT DO NOTHING;

-- Trigger untuk update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger jika sudah ada (untuk menghindari error)
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
DROP TRIGGER IF EXISTS update_tech_stacks_updated_at ON tech_stacks;

-- Create trigger
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tech_stacks_updated_at BEFORE UPDATE ON tech_stacks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

