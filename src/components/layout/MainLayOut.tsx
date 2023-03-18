import { Box } from '@chakra-ui/react';
import Header from '../Header/Header';

const MainLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        maxWidth={'1240px'}
        display='flex'
        alignItems='center'
        margin='auto'
        justifyContent={'center'}
        fontWeight={500}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayOut;
