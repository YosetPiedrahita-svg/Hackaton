// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AtmoSmart',
  tagline: 'Cada frente con aire seguro, cada turno con alertas a tiempo.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // GitHub Pages: https://yosetpiedrahita-svg.github.io/Hackaton/
  url: 'https://yosetpiedrahita-svg.github.io',
  baseUrl: '/Hackaton/',
  organizationName: 'YosetPiedrahita-svg',
  projectName: 'Hackaton',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hackathon/dashboard-atmosmart.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'AtmoSmart',
        logo: {alt: 'AtmoSmart', src: 'img/logo.svg'},
        items: [
          {to: '/hackathon-ufps', label: '🥇 Hackatón UFPS', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'atmosmartSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://atmosmart-backend.onrender.com/',
            label: 'Demo en vivo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {label: 'Arquitectura bidireccional', to: '/docs/atmosmart/arquitectura-bidireccional'},
              {label: 'Módulos de la plataforma', to: '/docs/atmosmart/modulos-plataforma'},
              {label: 'Normativa Decreto 1886', to: '/docs/atmosmart/normativa-decreto-1886'},
              {label: 'Hackatón y entregables', to: '/docs/atmosmart/hackathon-y-entregables'},
            ],
          },
          {
            title: 'Proyecto',
            items: [
              {label: 'Portada del 1er Puesto', to: '/hackathon-ufps'},
              {label: 'Demo en vivo', href: 'https://atmosmart-backend.onrender.com/'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Equipo 10 · AtmoSmart · Hackatón de Innovación para el Sector Minero – UFPS 2026.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
