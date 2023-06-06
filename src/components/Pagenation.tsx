import { Center, Flex } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Pagenation = ({
  currentPage,
  totalPageNumber,
}: {
  currentPage: number;
  totalPageNumber: number;
}) => {
  return (
    <Flex gap='20px' marginTop='30px'>
      {Array.from({ length: totalPageNumber }).map((v, i) => {
        return (
          <Link key={i} to={i === 0 ? '/' : `/${i + 1}`}>
            <Center
              width='30px'
              height='30px'
              border={i + 1 === currentPage ? '2px solid' : 'none'}
              borderRadius='50%'
            >
              {i + 1}
            </Center>
          </Link>
        );
      })}
    </Flex>
  );
};
export default Pagenation;
