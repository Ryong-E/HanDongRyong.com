import { extendTheme } from '@chakra-ui/react';

const style = {
  colors: {
    gray: {
      800: '#121212',
    },
  },
  fonts: {
    body: 'Pretendard',
    html: 'Pretendard',
  },
  breakpoints: {
    sm: '320px', // 320px ~ 768px
    md: '768px', // 768px ~ 960px
    lg: '960px', // 960px ~
  },
};

const theme = extendTheme(style);
export default theme;
