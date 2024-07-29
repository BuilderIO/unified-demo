import BuilderDevTools from "@builder.io/dev-tools/next";
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.builder.io", "shopifycdn.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["isolated-vm"],
  },
};
// export default nextConfig;
const configWithOverlay = BuilderDevTools()(
  withHydrationOverlay({
    /**
     * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
     * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
     */
    appRootSelector: "main",
  })(nextConfig)
);

export default configWithOverlay;
