import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GPT Estratégico - IEL/PR',
  tagline: 'Domine o uso estratégico do ChatGPT no ambiente corporativo.',
  url: 'https://criatividade.digital',
  baseUrl: '/ChatGPT-IEL/',
  favicon: 'img/iel.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CRIATIVIDADE.digital', // Usually your GitHub org/user name.
  projectName: 'ChatGPT-IEL', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
      title: 'ChatGPT',
      logo: {
        alt: 'ChatGPT logo',
        src: 'img/curso-icone.png',
      },
      items: [
        {
          type: 'custom-NavbarItemAuth',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
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
