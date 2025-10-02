import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

// Use default import from @next/mdx — some versions export the plugin as default
const withMDXConfig = withMDX({
  extension: /\.(md|mdx)$/,
  options: { remarkPlugins: [remarkGfm] },
})

const nextConfig = withMDXConfig({
  experimental: { appDir: true },
  typescript: { ignoreBuildErrors: false },
})

export default nextConfig
