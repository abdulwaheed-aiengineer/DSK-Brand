/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'DSK-Brand'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Serve under /DSK-Brand for GitHub Pages project site
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig

