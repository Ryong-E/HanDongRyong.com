import { Box } from '@chakra-ui/react';
import Header from 'components/Header/Header';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box maxWidth='800px' as='main' width='100%' display='flex' margin='auto' padding='0 20px'>
        {children}
      </Box>
    </>
  );
};
export default PostLayout;
