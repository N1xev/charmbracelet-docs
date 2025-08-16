import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/docs/:path*.mdx",
                destination: "/llms.mdx/:path*",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "godoc.org",
                port: "",
            },
            {
                protocol: "https",
                hostname: "stuff.charm.sh",
            },
            {
                protocol: "https",
                hostname: "goreportcard.com",
            },
            {
                protocol: "https",
                hostname: "vhs.charm.sh",
            },
            {
                protocol: "https",
                hostname: "img.shields.io",
            },
        ],
    },
};

export default withMDX(config);
