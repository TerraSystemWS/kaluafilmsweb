/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.sanity.io", "https://images.unsplash.com"],
	},
};

module.exports = nextConfig;
