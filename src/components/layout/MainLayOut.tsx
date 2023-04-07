import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import Header from '../Header/Header';

const MainLayOut = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <>
      <Header />
      <Box
        maxWidth='1040px'
        display='flex'
        alignItems='center'
        flexDirection='column'
        margin='auto'
        justifyContent={'center'}
        fontWeight={500}
        as='main'
        padding='30px 0 100px 0'
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayOut;
