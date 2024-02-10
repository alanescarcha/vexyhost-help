/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://help.vexyhost.com',
    generateRobotsTxt: false,
    outDir: './public',
    transform: async (config, path) => {
        let loc = path;
        // index
        if (path == '/index.en') {
            loc = '/'
        } else if (path == '/index.es') {
            loc = 'es'
        } else {
            // others docs
            if (path.endsWith('.en')) {
                loc = path.substring(1, path.length - 3);
            } else if (path.endsWith('.es')) {
                loc = "es/" + path.substring(1, path.length - 3);
            }
        }
        return {
            loc: loc, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}