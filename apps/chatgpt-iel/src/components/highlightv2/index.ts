import React from 'react';
import {createComponent} from '@lit/react';
import { CdHighlight } from './cd-highlight.es.js';

export const Highlight = createComponent({
  tagName: 'cd-highlight',
  elementClass: CdHighlight,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});