// import { nodeTypes } from "@mdx-js/mdx"
import nextra from "nextra"
// import rehypeRaw from "rehype-raw"
// import remarkShikiTwoslash from "remark-shiki-twoslash"
// import { remarkMermaid } from "remark-mermaid-nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  // mdxOptions: {
  //   rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
  //   remarkPlugins: [
  //     remarkMermaid,
  //     [
  //       remarkShikiTwoslash.default,
  //       {
  //         defaultCompilerOptions: {
  //           types: ["node"],
  //         },
  //         themes: ["dark-plus", "light-plus"],
  //       },
  //     ],
  //   ],
  // },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  redirects: () => [],
}

export default withNextra(nextConfig)