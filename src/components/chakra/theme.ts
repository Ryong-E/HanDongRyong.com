import { extendTheme } from '@chakra-ui/react';

const style = {
  styles: {
    global: {
      '.gatsby-resp-image-figcaption': {
        textAlign: 'center',
        marginTop: '10px',
        color: 'gray.500',
      },
    },
  },
  colors: {
    gray: {
      800: '#17171B',
    },
  },
  fonts: {
    body: 'HakgyoansimWoojuR',
    html: 'HakgyoansimWoojuR',
    heading: 'HakgyoansimWoojuR',
  },
  breakpoints: {
    sm: '320px', // 320px ~ 768px
    md: '768px', // 768px ~ 960px
    lg: '960px', // 960px ~
    xl: '1180px',
  },
};

const theme = extendTheme(style);
export default theme;
