/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://api.maghsadshow.com/api/",
  },
  reactStrictMode: true,
  NEXTAUTH_URL: "http://localhost:3000/api/auth",
};

module.exports = nextConfig;
