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
    // banner: {
    //     dismissible: true,
    //     key: 'new_translate', // Storage key to keep the banner state (dismissed or not).
    //     text: '🎉 New translations available. This site is still in beta. ⚠'
    // },
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
            <meta name="keywords" content="vexyhost, vexy host, help, docs, knowledgebase, documentation, documentacion, guias, articulos, tutoriales"></meta>
            <meta name="description" content="😀 Explore our guides and tutorials to better understand your VexyHost services. 🙌" />
            <meta name="generator" content="Nextra" />
            <link rel="alternate" href="https://help.vexyhost.com/" hreflang="en" />
            <link rel="alternate" href="https://help.vexyhost.com/es" hreflang="es" />
            <link rel="sitemap" href="/sitemap.xml" />
            <link rel="shortcut icon" href="https://vexyhost.com/favicon.ico" />
            <link rel="preconnect" href="https://cdn.vexyhost.com" />
            <link rel="preconnect" href="https://i.imgur.com" />
            <link rel="preconnect" href="https://cdn.jsdelivr.net" />
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