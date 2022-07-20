// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Linux Docs',
    tagline: 'Linux Docs make your work easy',
    url: 'https://linux-docs.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'warn', // throw
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'abranasays', // Usually your GitHub org/user name.
    projectName: 'linux-docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/abranasays/linux-docs/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/abranasays/linux-docs/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Linux Docs',
                logo: {
                    alt: 'Linux Docs Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/abranasays/linux-docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/abranasays/linux-docs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Linux Docs, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['php', 'bash'],
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'DB7XJJVIBI',

                // Public API key: it is safe to commit it
                apiKey: 'efe78d6f745481edc4883026d3fa0b91',

                indexName: 'Linux_Docs',

                // Optional: see doc section below
                // contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Algolia search parameters
                // searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                // searchPagePath: 'search',

                //... other Algolia params
            },
        }),
};

module.exports = config;
