import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => (
	<div>
		<Navbar />
		{children}
		<Footer />
	</div>
);

export default Layout;

/*
[22:39:37.880] Cloning github.com/TerraSystemWS/kaluafilmsweb (Branch: main, Commit: 7b481d2)
[22:39:38.587] Cloning completed: 707.114ms
[22:39:38.810] Looking up build cache...
[22:39:41.927] Build cache downloaded [50.35 MB]: 3116ms
[22:39:41.985] Running "vercel build"
[22:39:42.646] Vercel CLI 28.4.10-6fa5d8b
[22:39:43.084] Installing dependencies...
[22:39:43.523] yarn install v1.22.17
[22:39:43.603] [1/4] Resolving packages...
[22:39:43.824] [2/4] Fetching packages...
[22:40:02.666] [3/4] Linking dependencies...
[22:40:13.482] [4/4] Building fresh packages...
[22:40:14.064] Done in 30.55s.
[22:40:14.095] Detected Next.js version: 12.3.0
[22:40:14.098] Running "yarn run build"
[22:40:14.453] yarn run v1.22.17
[22:40:14.503] $ next build
[22:40:14.886] info  - Loaded env from /vercel/path0/.env
[22:40:15.212] info  - Linting and checking validity of types...
[22:40:17.915] 
[22:40:17.916] ./pages/index.tsx
[22:40:17.916] 191:8  Warning: Do not use `<img>` element. Use `<Image />` from `next/image` instead. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[22:40:17.917] 
[22:40:17.917] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
[22:40:20.055] info  - Creating an optimized production build...
[22:40:26.683] info  - Compiled successfully
[22:40:26.684] info  - Collecting page data...
[22:40:27.188] Using the Sanity client without specifying an API version is deprecated. See https://docs.sanity.io/help/js-client-api-version
[22:40:27.188] You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and cheaper. Think about it! For more info, see https://docs.sanity.io/help/js-client-cdn-configuration. To hide this warning, please set the `useCdn` option to either `true` or `false` when creating the client.
[22:40:27.249] Using the Sanity client without specifying an API version is deprecated. See https://docs.sanity.io/help/js-client-api-version
[22:40:27.250] You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and cheaper. Think about it! For more info, see https://docs.sanity.io/help/js-client-cdn-configuration. To hide this warning, please set the `useCdn` option to either `true` or `false` when creating the client.
[22:40:30.811] info  - Generating static pages (0/5)
[22:40:30.892] Using the Sanity client without specifying an API version is deprecated. See https://docs.sanity.io/help/js-client-api-version
[22:40:30.893] You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and cheaper. Think about it! For more info, see https://docs.sanity.io/help/js-client-cdn-configuration. To hide this warning, please set the `useCdn` option to either `true` or `false` when creating the client.
[22:40:31.070] info  - Generating static pages (1/5)
[22:40:31.090] info  - Generating static pages (2/5)
[22:40:31.098] info  - Generating static pages (3/5)
[22:40:31.848] info  - Generating static pages (5/5)
[22:40:31.865] info  - Finalizing page optimization...
[22:40:31.891] 
[22:40:31.909] Route (pages)                              Size     First Load JS
[22:40:31.910] ┌ ● / (1033 ms)                            17 kB            95 kB
[22:40:31.910] ├   └ css/53fa15469dc309b1.css             574 B
[22:40:31.911] ├   /_app                                  0 B            77.9 kB
[22:40:31.911] ├ ○ /404                                   182 B          78.1 kB
[22:40:31.911] ├ λ /api/handle-gosto                      0 B            77.9 kB
[22:40:31.911] ├ λ /api/hello                             0 B            77.9 kB
[22:40:31.911] └ ● /blog/[slug] (540 ms)                  1.22 kB        79.2 kB
[22:40:31.912]     ├ /blog/terra-dja-ca-bai-ya
[22:40:31.912]     └ /blog/kalua-films
[22:40:31.912]   ├ chunks/framework-09a2284fdc01dc36.js   45.5 kB
[22:40:31.912]   ├ chunks/main-cfb7505b9f8f124c.js        31.1 kB
[22:40:31.912]   ├ chunks/pages/_app-fcb935ebbac35914.js  497 B
[22:40:31.912]   ├ chunks/webpack-82d7cd4553e3b866.js     814 B
[22:40:31.913]   └ css/2008ed3b40c47416.css               3.44 kB
[22:40:31.913] 
[22:40:31.913] λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
[22:40:31.914] ○  (Static)  automatically rendered as static HTML (uses no initial props)
[22:40:31.914] ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
[22:40:31.914] 
[22:40:31.990] Done in 17.55s.
[22:40:32.903] Traced Next.js server files in: 872.956ms
[22:40:33.290] Created all serverless functions in: 386.793ms
[22:40:33.309] Collected static files (public/, static/, .next/static): 10.619ms
[22:40:34.127] Build Completed in /vercel/output [51s]
[22:40:40.300] Generated build outputs:
[22:40:40.300]  - Static files: 22
[22:40:40.300]  - Serverless Functions: 10
[22:40:40.300]  - Edge Functions: 0
[22:40:40.301] Serverless regions: Washington, D.C., USA
[22:40:40.301] Deployed outputs in 4s
[22:40:40.801] Build completed. Populating build cache...
[22:40:56.834] Uploading build cache [63.93 MB]...
[22:40:58.296] Build cache uploaded: 1.462s
[22:40:58.333] Done with "."
*/
