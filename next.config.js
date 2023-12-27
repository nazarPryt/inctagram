/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        //https://levelup.gitconnected.com/how-to-use-svg-icons-in-a-next-js-project-f6f8256f9e12
        return config
    },
    compiler: {styledComponents: true},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                pathname: '**',
            },
        ],
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
}
module.exports = nextConfig
