export default {
    logo: (
        <img width='70%' src="https://cdn.vexyhost.com/logo-white.svg" alt="VexyHost logo" />
    ),
    chat: {
        link: 'https://discord.vexyhost.com/'
    },
    search:
    {
        placeholder: 'Search...'
    },
    banner: {
        dismissible: true,
        key: 'new_translate', // Storage key to keep the banner state (dismissed or not).
        text: '🎉 New translations available. This site is still in beta. ⚠'
    },
    footer: {
        component: null
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: true
    },
    toc: {
        backToTop: true
    },
    editLink: {
        text: null
    },
    feedback: {
        content: null
    },
    navigation: {
        prev: true,
        next: true
    },
    head: (
        <>
            <meta name="description" content="😀 Explore our guides and tutorials to better understand your VexyHost services. 🙌" />
            <link rel="shortcut icon" href="https://vexyhost.com/favicon.ico"></link>
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s | 🔍 VexyHost Docs'
        }
    },
    i18n: [
        { locale: 'en', text: '🇺🇸 English' },
        { locale: 'es', text: '🇪🇸 Español' },
    ]
    // ... other theme options
}