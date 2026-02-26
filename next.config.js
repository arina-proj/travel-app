const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.NODE_ENV === "production" 
      ? "https://arina-proj.github.io/travel-app"  
      : "http://localhost:3002"
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Добавь basePath для GitHub Pages
  basePath: '/travel-app',
  assetPrefix: '/travel-app/',
};

export default nextConfig;