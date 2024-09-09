/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.ctfassets.net", protocol: "https" }, { hostname: "nuwanperera-me.vercel.app", protocol: "https"}],
  },
};

export default nextConfig;
