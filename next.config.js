/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://api.maghsadshow.com/api/",
    SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gts=",
  },
  reactStrictMode: true,
  NEXTAUTH_URL: "http://localhost:3000/api/auth",
};

module.exports = nextConfig;
