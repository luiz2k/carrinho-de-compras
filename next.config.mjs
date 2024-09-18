/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/fir-auth-1c3bc.appspot.com/**.jpg",
      },
    ],
  },
};

export default nextConfig;
