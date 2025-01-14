/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io'], // add sanity's CDN domain here
    },
    experimental: {
        workerThreads: false,
        cpus: 1, // Limit CPU usage to 1 to prevent overloading.
    },

};







export default nextConfig;
