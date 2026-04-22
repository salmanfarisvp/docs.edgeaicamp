// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI Bootcamp',
  tagline: 'Hands-on workshops for Edge AI, TinyML & Physical AI',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.edgeaicamp.in',
  baseUrl: '/',

  organizationName: 'salmanfarisvp',
  projectName: 'docs.edgeaicamp',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/edgeaicamp/edgeaicamp-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI Bootcamp',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'workshopSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://edgeaicamp.in',
            label: 'edgeaicamp.in',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/salmanfarisvp/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI Bootcamp. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['arduino', 'python', 'bash', 'json'],
      },
    }),
};

export default config;
