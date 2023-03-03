import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from './chakra/theme';

function Root({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default Root;
