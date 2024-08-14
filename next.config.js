/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'staging.miningskills.com.au'
            }
        ]
    }
}

module.exports = nextConfig
