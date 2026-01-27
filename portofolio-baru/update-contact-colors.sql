-- Update warna untuk LinkedIn dan Instagram sesuai brand colors

-- Update LinkedIn: Warna biru LinkedIn (#0077B5 / blue-600/blue-700)
UPDATE contact_links 
SET 
  gradient = 'from-blue-600 to-blue-700',
  bg_color = 'bg-gradient-to-br from-blue-600/20 to-blue-700/20',
  updated_at = NOW()
WHERE icon_name = 'FaLinkedin' OR title LIKE '%Linkedin%' OR title LIKE '%LinkedIn%';

-- Update Instagram: Gradient pink/purple/orange yang lebih terang dan sesuai brand
UPDATE contact_links 
SET 
  gradient = 'from-purple-600 via-pink-500 to-orange-500',
  bg_color = 'bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20',
  updated_at = NOW()
WHERE icon_name = 'FaInstagram' OR title LIKE '%Instagram%';

