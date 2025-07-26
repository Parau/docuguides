import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  ONDG1: [
    {
      type: 'doc',
      label: 'INTRODUÇÃO',
      id: 'apresentacao',
    },
    {
      type: 'category',
      label: 'CURIOSO',
      link: {
        type: 'doc',
        id: 'curioso',
      },
      items: ['login/uso_pessoal', 'login/uso_team', 
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
  ],
    ONDG2: [
    {
      type: 'category',
      label: 'Novo',
      items: [ 
        {
          type: 'doc',
          label: 'Sobre o Livro', // Você pode customizar o label aqui
          id: 'apresentacao2',      // Este é o ID do seu arquivo .md (ex: sobreolivro.md)
        },
        {
          type: 'ref',
          label: 'Sobre o Livro', // Você pode customizar o label aqui
          id: 'sobreolivro',      // Este é o ID do seu arquivo .md (ex: sobreolivro.md)
        },
      ],
    },
    {
      type: 'ref',
      label: 'Sobre o Livro',
      id: 'versaoimpressa',
    },
  ]
};

export default sidebars;
