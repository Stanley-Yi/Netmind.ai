/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
    env: {
        // PUBLIC_API_BASE_URL: "http://13.40.213.162:8000",
        PUBLIC_API_BASE_URL: "https://xyz.netmind.ai/api",
    },
}

export default nextConfig;
