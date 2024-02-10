export default {
    logo: (
        <img width='70%' src="https://cdn.vexyhost.com/logo-white.svg" alt="VexyHost logo" />
    ),
    chat: {
        link: 'https://discord.vexyhost.com/'
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