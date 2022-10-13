/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blog.munenick.me'],
  },  
  // hot reload
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 5000, //チェック時間
      aggregateTimeout: 500, // 遅延時間
      ignored : ['node_modules']
    };
    return config;
  },
};

module.exports = nextConfig;
