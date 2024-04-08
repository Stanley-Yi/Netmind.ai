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
}

export default nextConfig;
