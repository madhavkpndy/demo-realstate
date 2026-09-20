import type { NextConfig } from 'next'

/**
 * GitHub Pages serves this repo from https://<user>.github.io/demo-realstate/,
 * so every URL needs that prefix. CI sets NEXT_PUBLIC_BASE_PATH; locally it is
 * unset, so `npm run dev` still runs at "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS only — Pages cannot run a Node server.
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  // No image optimiser without a server. Harmless here: the scenes are plain
  // <img> with a hand-built srcset, not next/image.
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
