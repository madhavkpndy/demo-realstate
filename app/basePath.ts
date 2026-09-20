/**
 * Prefix for anything referenced by a raw string URL.
 *
 * next.config's `basePath` rewrites next/link and next/image, but NOT plain
 * `src` / `srcSet` / `url()` strings — those would resolve against the domain
 * root and 404 on a project Pages site. Route every asset path through this.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const asset = (path: string) => `${basePath}${path}`
