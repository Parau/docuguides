import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ChatGPT-IEL/__docusaurus/debug',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug', '2b3'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/config',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/config', 'a51'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/content',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/content', 'e64'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/globalData',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/globalData', '846'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/metadata',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/metadata', '47c'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/registry',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/registry', '9e9'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/__docusaurus/debug/routes',
    component: ComponentCreator('/ChatGPT-IEL/__docusaurus/debug/routes', 'cf8'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/markdown-page',
    component: ComponentCreator('/ChatGPT-IEL/markdown-page', '4d5'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/nologin',
    component: ComponentCreator('/ChatGPT-IEL/nologin', 'fd6'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/nologincontent',
    component: ComponentCreator('/ChatGPT-IEL/nologincontent', 'de9'),
    exact: true
  },
  {
    path: '/ChatGPT-IEL/docs',
    component: ComponentCreator('/ChatGPT-IEL/docs', '081'),
    routes: [
      {
        path: '/ChatGPT-IEL/docs',
        component: ComponentCreator('/ChatGPT-IEL/docs', '5bd'),
        routes: [
          {
            path: '/ChatGPT-IEL/docs',
            component: ComponentCreator('/ChatGPT-IEL/docs', '8da'),
            routes: [
              {
                path: '/ChatGPT-IEL/docs/',
                component: ComponentCreator('/ChatGPT-IEL/docs/', '50d'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/atividade-envio-familia',
                component: ComponentCreator('/ChatGPT-IEL/docs/atividade-envio-familia', '505'),
                exact: true
              },
              {
                path: '/ChatGPT-IEL/docs/atividade-enviolink',
                component: ComponentCreator('/ChatGPT-IEL/docs/atividade-enviolink', '671'),
                exact: true
              },
              {
                path: '/ChatGPT-IEL/docs/bancoatividades',
                component: ComponentCreator('/ChatGPT-IEL/docs/bancoatividades', '739'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/compraemlote',
                component: ComponentCreator('/ChatGPT-IEL/docs/compraemlote', '66d'),
                exact: true
              },
              {
                path: '/ChatGPT-IEL/docs/conquistanomeproprio',
                component: ComponentCreator('/ChatGPT-IEL/docs/conquistanomeproprio', '7a6'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/contacao',
                component: ComponentCreator('/ChatGPT-IEL/docs/contacao', 'a3e'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/descontoworkshop',
                component: ComponentCreator('/ChatGPT-IEL/docs/descontoworkshop', '6a7'),
                exact: true
              },
              {
                path: '/ChatGPT-IEL/docs/emfamilia',
                component: ComponentCreator('/ChatGPT-IEL/docs/emfamilia', 'fe3'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/ganhandobadge',
                component: ComponentCreator('/ChatGPT-IEL/docs/ganhandobadge', 'd0d'),
                exact: true
              },
              {
                path: '/ChatGPT-IEL/docs/importanciahistoria',
                component: ComponentCreator('/ChatGPT-IEL/docs/importanciahistoria', '7bb'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/laboratorio',
                component: ComponentCreator('/ChatGPT-IEL/docs/laboratorio', '942'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/palavrasfavoritas',
                component: ComponentCreator('/ChatGPT-IEL/docs/palavrasfavoritas', '0f0'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/sobreolivro',
                component: ComponentCreator('/ChatGPT-IEL/docs/sobreolivro', '159'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/textosmusicas',
                component: ComponentCreator('/ChatGPT-IEL/docs/textosmusicas', '7bb'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/versaodigital',
                component: ComponentCreator('/ChatGPT-IEL/docs/versaodigital', 'a06'),
                exact: true,
                sidebar: "ONDG1"
              },
              {
                path: '/ChatGPT-IEL/docs/versaoimpressa',
                component: ComponentCreator('/ChatGPT-IEL/docs/versaoimpressa', '6d1'),
                exact: true,
                sidebar: "ONDG1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ChatGPT-IEL/',
    component: ComponentCreator('/ChatGPT-IEL/', '2ea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
