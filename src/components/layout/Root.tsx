import { ChakraProvider } from '@chakra-ui/react';
import theme from 'components/chakra/theme';

function Root({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider cssVarsRoot='body' theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export default Root;
