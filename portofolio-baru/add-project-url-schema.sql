-- Tambah kolom project_url ke tabel projects

ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS project_url TEXT;

