// src/theme/customTheme.ts
import { defaultTheme } from '@aws-amplify/ui-react';

const customTheme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: '#002b4b' },
      },
    },
  },
};

export default { ...defaultTheme, ...customTheme };
