import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.diocesedecolatina.org.br',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.padrereginaldomanzotti.org.br',
      },
      {
        protocol: 'https',
        hostname: 's2.glbimg.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs2.imgbox.com',
      },
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'xn--oraaosecreta-mdb.site',
      },
      {
        protocol: 'https',
        hostname: 'classic.exame.com',
      },
      {
        protocol: 'https',
        hostname: 'static.nationalgeographicbrasil.com',
      },
      {
        protocol: 'https',
        hostname: 'media.atomicatpages.net',
      },
    ],
  },
};

export default nextConfig;
