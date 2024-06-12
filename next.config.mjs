/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com', 'coinpayments.net'],
        minimumCacheTTL: 1500000,
    }
};

export default nextConfig;
