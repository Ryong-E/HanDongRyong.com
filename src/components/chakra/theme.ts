import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#ffffff', '#121212')(props),
    },
    header: {
      bg: mode('#ffffff', '#121212')(props),
    },
  }),
};

const theme = extendTheme({
  styles,
});

export default theme;
