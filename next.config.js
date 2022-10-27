/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:9999/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:9999/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
