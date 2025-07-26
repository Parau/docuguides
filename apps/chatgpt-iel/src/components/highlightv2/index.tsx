import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

type HighlightProps = Record<string, any>;

export const Highlight = (props: HighlightProps) => (
  <BrowserOnly>
    {() => {
      // Import inside BrowserOnly to avoid SSR/SSG crash
      const { createComponent } = require('@lit/react');
      const { CdHighlight } = require('./cd-highlight.es.js');
      const InternalHighlight = createComponent({
        tagName: 'cd-highlight',
        elementClass: CdHighlight,
        react: React,
        events: {
          onactivate: 'activate',
          onchange: 'change',
        },
      });
      return <InternalHighlight {...props} />;
    }}
  </BrowserOnly>
);