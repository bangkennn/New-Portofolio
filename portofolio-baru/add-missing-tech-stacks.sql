-- Tambah tech stack yang belum ada seperti HTML, CSS, dan lainnya

INSERT INTO tech_stacks (name, icon_name, color) 
VALUES 
  -- Web Fundamentals
  ('HTML', 'SiHtml5', 'text-orange-500'),
  ('CSS', 'SiCss3', 'text-blue-500'),
  ('HTML5', 'SiHtml5', 'text-orange-500'),
  ('CSS3', 'SiCss3', 'text-blue-500'),
  
  -- CSS Frameworks & Preprocessors
  ('Less', 'SiLess', 'text-blue-400'),
  ('Stylus', 'SiStylus', 'text-gray-400'),
  ('PostCSS', 'SiPostcss', 'text-red-500'),
  ('Material-UI', 'SiMaterialui', 'text-blue-500'),
  ('Chakra UI', 'SiChakraui', 'text-teal-400'),
  ('Ant Design', 'SiAntdesign', 'text-blue-600'),
  ('MUI', 'SiMaterialui', 'text-blue-500'),
  
  -- JavaScript Libraries & Frameworks
  ('jQuery', 'SiJquery', 'text-blue-600'),
  ('Vue', 'SiVuedotjs', 'text-green-500'),
  ('Nuxt.js', 'SiNuxtdotjs', 'text-green-400'),
  ('Gatsby', 'SiGatsby', 'text-purple-500'),
  ('Remix', 'SiRemix', 'text-black'),
  ('Astro', 'SiAstro', 'text-orange-500'),
  ('SvelteKit', 'SiSvelte', 'text-orange-500'),
  ('SolidJS', 'SiSolid', 'text-blue-500'),
  
  -- State Management
  ('Redux', 'SiRedux', 'text-purple-500'),
  ('Zustand', 'SiZustand', 'text-orange-500'),
  ('MobX', 'SiMobx', 'text-pink-500'),
  ('Recoil', 'SiRecoil', 'text-blue-500'),
  
  -- Backend Frameworks
  ('NestJS', 'SiNestjs', 'text-red-500'),
  ('Koa', 'SiKoa', 'text-black'),
  ('Hapi', 'SiHapi', 'text-orange-500'),
  ('Socket.io', 'SiSocketdotio', 'text-black'),
  ('Prisma', 'SiPrisma', 'text-teal-500'),
  ('Sequelize', 'SiSequelize', 'text-blue-500'),
  ('TypeORM', 'SiTypeorm', 'text-red-500'),
  
  -- Mobile Development
  ('Expo', 'SiExpo', 'text-black'),
  ('NativeBase', 'SiNativebase', 'text-blue-500'),
  
  -- Build Tools & Bundlers
  ('Webpack', 'SiWebpack', 'text-blue-500'),
  ('Vite', 'SiVite', 'text-yellow-500'),
  ('Rollup', 'SiRollup', 'text-red-500'),
  ('Parcel', 'SiParcel', 'text-yellow-500'),
  ('Turbo', 'SiTurborepo', 'text-blue-500'),
  ('Nx', 'SiNx', 'text-blue-600'),
  
  -- Testing
  ('Vitest', 'SiVitest', 'text-yellow-500'),
  ('Testing Library', 'SiTestinglibrary', 'text-red-500'),
  ('Mocha', 'SiMocha', 'text-yellow-600'),
  ('Chai', 'SiChai', 'text-red-500'),
  
  -- Databases (Additional)
  ('MariaDB', 'SiMariadb', 'text-blue-500'),
  ('Cassandra', 'SiApache', 'text-blue-500'),
  ('Elasticsearch', 'SiElasticsearch', 'text-yellow-500'),
  ('Neo4j', 'SiNeo4j', 'text-green-500'),
  
  -- Cloud Services
  ('Vercel', 'SiVercel', 'text-black'),
  ('Netlify', 'SiNetlify', 'text-teal-500'),
  ('Heroku', 'SiHeroku', 'text-purple-500'),
  ('DigitalOcean', 'SiDigitalocean', 'text-blue-500'),
  ('Cloudflare', 'SiCloudflare', 'text-orange-500'),
  
  -- CMS & Headless CMS
  ('Strapi', 'SiStrapi', 'text-purple-500'),
  ('Contentful', 'SiContentful', 'text-blue-500'),
  ('Sanity', 'SiSanity', 'text-pink-500'),
  ('WordPress', 'SiWordpress', 'text-blue-500'),
  ('Ghost', 'SiGhost', 'text-black'),
  
  -- Authentication & Security
  ('Auth0', 'SiAuth0', 'text-black'),
  ('NextAuth', 'SiNextauth', 'text-black'),
  ('Passport', 'SiPassport', 'text-gray-400'),
  
  -- Payment & E-commerce
  ('Stripe', 'SiStripe', 'text-blue-500'),
  ('PayPal', 'SiPaypal', 'text-blue-500'),
  ('Shopify', 'SiShopify', 'text-green-500'),
  ('WooCommerce', 'SiWoocommerce', 'text-purple-500'),
  
  -- Monitoring & Analytics
  ('Sentry', 'SiSentry', 'text-orange-500'),
  ('Datadog', 'SiDatadog', 'text-purple-500'),
  ('New Relic', 'SiNewrelic', 'text-blue-500'),
  ('LogRocket', 'SiLogrocket', 'text-purple-500'),
  
  -- Additional Tools
  ('ESLint', 'SiEslint', 'text-purple-500'),
  ('Prettier', 'SiPrettier', 'text-pink-500'),
  ('Husky', 'SiHusky', 'text-gray-400'),
  ('Storybook', 'SiStorybook', 'text-pink-500'),
  ('D3.js', 'SiD3dotjs', 'text-orange-500'),
  ('Three.js', 'SiThreedotjs', 'text-black'),
  ('Chart.js', 'SiChartdotjs', 'text-pink-500')
ON CONFLICT (name) DO NOTHING;

