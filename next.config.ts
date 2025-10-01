import { withMDX } from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDXConfig = withMDX({
  extension: /.mdx?$/,
  options: { remarkPlugins: [remarkGfm] }
})

const nextConfig = withMDXConfig({
  experimental: { appDir: true },
  typescript: { ignoreBuildErrors: false },
})

export default nextConfig
