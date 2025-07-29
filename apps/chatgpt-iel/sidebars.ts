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
        id: 'curioso/curioso-abertura',
      },
      items: ['curioso/login/uso_pessoal', 'curioso/login/uso_team', 
              'curioso/primeiros_exemplos', 'curioso/vamos_esclarecer'],
    },
    {
      type: 'category',
      label: 'INICIAÇÃO',
      items: ['iniciacao/vocabulario'],
    },
  ]
};

export default sidebars;
