// src/theme/customTheme.ts
import { defaultTheme } from '@aws-amplify/ui-react';

const customTheme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: '#f2f6f9' },
      },
    },
  },
};

export default { ...defaultTheme, ...customTheme };
