// src/theme/customTheme.ts
import { defaultTheme } from '@aws-amplify/ui-react';

const customTheme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: '#f2f6f9' },        // existing override for main content background
        secondary: { value: '#32b2e7' },      // new override: outer Authenticator container
      },
    },
  },
};

export default { ...defaultTheme, ...customTheme };

