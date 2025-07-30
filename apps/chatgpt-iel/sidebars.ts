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
      link: {
        type: 'doc',
        id: 'iniciacao/iniciacao-abertura',
      },
      items: [
        {
          type: 'category',
          label: 'Vocabulário',
          items: [
            'iniciacao/vocabulario',
            'iniciacao/chatgpt',
            'iniciacao/LLM',
            'iniciacao/prompts'
          ],
        },
        {
        type: 'doc',
        label: 'Ferramentas',
        id: 'iniciacao/ferramentas',
        }
      ]
    }
  ]
};

export default sidebars;
