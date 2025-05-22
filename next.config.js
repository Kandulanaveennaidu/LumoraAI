/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.pexels.com' },
            { protocol: 'https', hostname: 'cdn.pixabay.com' },
            { protocol: 'https', hostname: 'placehold.co' },
            { protocol: 'https', hostname: 'www.nec.com' },
            { protocol: 'https', hostname: 'www.broadcom.com' },
            { protocol: 'https', hostname: 'www.pfizer.com' },
            { protocol: 'https', hostname: 'www.bmw.com' },
            { protocol: 'https', hostname: 'www.kellanova.com' },
            { protocol: 'https', hostname: 'www.accenture.com' },
            { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
            { protocol: 'https', hostname: 'logo.clearbit.com' },
            { protocol: 'https', hostname: 'images.yourstory.com', pathname: '/**' },
            { protocol: 'https', hostname: 'blog.unrealspeech.com', pathname: '/**' },
            { protocol: 'https', hostname: 'cdn-docs.vizard.ai', pathname: '/**' },
            { protocol: 'https', hostname: 'miro.medium.com', pathname: '/**' },
            { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }
        ],
        domains: [
            'cdn.worldvectorlogo.com',
            'cdn-icons-png.flaticon.com',
            'cdn.iconscout.com',
            'cdn.prod.website-files.com',
            'www.g2.com'
        ],
    },
}

module.exports = nextConfig;