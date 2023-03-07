import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './Header/Header';

const MainLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        maxWidth={900}
        margin="auto"
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        justifyContent={'center'}
        fontWeight={500}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayOut;
