// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LowLevel.Design',
  tagline: 'Prepare for Low Level Design Interviews',
  url: 'https://lowlevel.design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lowlevel-design', // Usually your GitHub org/user name.
  projectName: 'lowlevel-design', // Usually your repo name.
  trailingSlash: true,
  staticDirectories: ['static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/lowlevel-design/lowlevel.design',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      {
        id: 'case-studies',
        path: 'case-studies',
        routeBasePath: 'case-studies',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      {
        id: 'design-patterns',
        path: 'design-patterns',
        routeBasePath: 'design-patterns',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LowLevel.Design',
        logo: {
          alt: 'LowLevel.Design Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/design-patterns/what-are-design-patterns',
            activeBaseRegex: `/design-patterns/`,
            position: 'left',
            label: 'Design Patterns',
          },
          {
            to: '/case-studies/intro',
            activeBaseRegex: `/case-studies/`,
            position: 'left',
            label: 'Case Studies',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Naman Bhalla`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
  }),
};

module.exports = config;
