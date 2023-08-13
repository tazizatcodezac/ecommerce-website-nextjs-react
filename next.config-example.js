/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    env: {
      API_URL: "http://localhost:3000",
      DB_URI: "mongodb://127.0.0.1:27017/ecommerce",
      CLOUD_NAME: "cloudname",
      CLOUDINARY_API_KEY: "cloudapikey",
      CLOUDINARY_API_SECRET: "dfnccloudsecretkey",
  
      STRIPE_PUBLIC_KEY: "",
      STRIPE_PRIVATE_KEY: "",
      STRIPE_WEBHOOK_SECRET: "",
  
      NEXTAUTH_SECRET: "nextauthsecretkey",
    },
    images: {
      domains: ["res.cloudinary.com"],
    },
  };
  
  module.exports = nextConfig;
  