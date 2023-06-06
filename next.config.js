/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'shop.wj123.cn'
		]
	},
	reactStrictMode: true,
	distDir: 'dist',
	output: 'export'
}

module.exports = nextConfig
