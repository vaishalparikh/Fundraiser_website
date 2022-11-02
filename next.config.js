/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,compiler:{
    styledComponents:true,
  },
  images: {
    domains:  ['ipfs.infura.io', 'th.bing.com', 'crowdfunding.infura-ipfs.io']
   }
}

module.exports = nextConfig
