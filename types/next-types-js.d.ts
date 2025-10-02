// Help TypeScript resolve imports that reference "next/types.js" in generated files
// Some Next.js generated type files import from "next/types.js" which doesn't
// provide a JS export surface at runtime. Provide a typing module that
// re-exports the relevant types so the compiler can find them.
declare module 'next/types.js' {
  export * from 'next'
  // Explicitly re-export metadata resolving types used in .next generated validator files
  export type { ResolvingMetadata, ResolvingViewport } from 'next/dist/lib/metadata/types/metadata-interface.js'
}
