// from images link define


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:'cdn.dummyjson.com',
      },
      
      {
        protocol:"https",
        hostname:'i.ibb.co.com',
      },
      
    ]
  }
};

export default nextConfig;
