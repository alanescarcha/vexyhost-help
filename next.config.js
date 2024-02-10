const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    defaultShowCopyCode: true
})

module.exports = withNextra({
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        localeDetection: false
    }
})
