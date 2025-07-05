import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  ONDG1: [
    {
      type: 'category',
      label: 'INTRODUÇÃO',
      items: ['apresentacao'],
    },
    {
      type: 'category',
      label: 'O NOME PRÓPRIO',
      items: ['importanciahistoria', 'conquistanomeproprio', 
              'textosmusicas',  'bancoatividades', 'palavrasfavoritas'],
    },
    {
      type: 'category',
      label: 'O NOME DA GENTE',
      items: ['sobreolivro', 'versaoimpressa', 'versaodigital'],
    },
    {
      type: 'category',
      label: 'Planos de aula ONDG',
      items: ['contacao','laboratorio', 'emfamilia' ],
    }/*,
    {
      type: 'category',
      label: 'Atividades do workshop',
      items: ['ONDG01/atividade-enviolink', 'ONDG01/atividade-envio-familia',
              'ONDG01/ganhandobadge'],
    },
    {
      type: 'category',
      label: 'BÔNUS',
      items: ['ONDG01/compraemlote', 'ONDG01/descontoworkshop'],
    }*/
  ]
};

export default sidebars;
