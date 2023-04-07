import { Box } from '@chakra-ui/react';
import Header from 'components/Header/Header';
import { useEffect } from 'react';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Box
        maxWidth='800px'
        display='flex'
        flexDirection='column'
        alignItems='left'
        margin='auto'
        padding='50px'
      >
        {children}
      </Box>
    </>
  );
};
export default PostLayout;
