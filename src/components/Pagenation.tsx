import { Center, Flex, Link } from '@chakra-ui/react';

const Pagenation = ({
  currentPage,
  totalPageNumber,
}: {
  currentPage: number;
  totalPageNumber: number;
}) => {
  return (
    <Flex gap='20px'>
      {Array.from({ length: totalPageNumber }).map((v, i) => {
        return (
          <Link key={i} href={i === 0 ? '/' : `${i + 1}`}>
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
