-- Migration untuk menambahkan logo_url ke careers dan educations

-- Tambah kolom logo_url ke tabel careers
ALTER TABLE careers 
ADD COLUMN IF NOT EXISTS logo_url TEXT;

-- Tambah kolom logo_url ke tabel educations
ALTER TABLE educations 
ADD COLUMN IF NOT EXISTS logo_url TEXT;

