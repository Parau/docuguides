import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'A Importância do Nome na Alfabetização',
  tagline: 'Explore como o nome próprio fortalece identidade, afeto e gosto pela leitura.',
  url: 'https://criatividade.digital',
  baseUrl: '/importancia-nome-alfabetizacao/',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CRIATIVIDADE.digital', // Usually your GitHub org/user name.
  projectName: 'importancia-nome-alfabetizacao', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-WQG5CDQL',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ondg-planos-social-card.jpg',
    navbar: {
      title: 'Nome na Alfabetização',
      logo: {
        alt: 'Nome na Alfabetização',
        src: 'img/curso-icone.png',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Facebook',
          items: [
            {
              label: 'CRIATIVIDADE.digital',
              href: 'https://www.facebook.com/ACriatividadeDigital',
            },
            {
              label: 'APRENDER.digital',
              href: 'https://www.facebook.com/pagina.aprender.digital',
            },
          ],
        },
        {
          title: 'Instagram',
          items: [
            {
              label: 'CRIATIVIDADE.digital',
              href: 'https://www.instagram.com/acriatividade.digital/',
            },
            {
              label: 'APRENDER.digital',
              href: 'https://www.instagram.com/aprender.digital/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alfabetizar - CRIATIVIDADE.digital.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env.local",
        systemvars: true,
      },
    ],
  ],
};

export default config;
