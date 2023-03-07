import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const style = {
  colors: {
    gray: {
      800: '#121212',
    },
  },
  fonts: {
    body: `'IBM Plex Sans KR'`,
  },
};

const theme = extendTheme(style);
export default theme;
