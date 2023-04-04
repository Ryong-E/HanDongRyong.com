import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { FontColor } from 'styles/color';
import { Article } from 'types';

const PostCard = ({ article }: { article: Article }) => {
  const { createdAt, description, title, thumbnail } = article;
  return (
    <Box
      display='flex'
      flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
      height='100%'
      width={'100%'}
      fontFamily='Pretendard'
      alignItems='center'
      _hover={{
        '& > img': {
          transform: 'translateY(-10px)',
          boxShadow: '2xl',
        },
        '& h1': {
          color: FontColor.artHeader,
        },
      }}
    >
      <Image
        transition='0.2s ease-in-out'
        src={thumbnail || ''}
        alt='thumbnail'
        width={{ sm: '100%', md: '200px', lg: '200px' }}
        height={{ sm: '200px', md: '200px', lg: '200px' }}
        objectFit='cover'
        marginRight={{ sm: '0', md: '50px', lg: '50px' }}
        marginBottom={{ sm: '20px', md: '0' }}
        borderRadius='20px'
      />
      <Box>
        <Heading as='h1' size='xl' marginBottom='20px' wordBreak='keep-all' textOverflow='ellipsis'>
          {title}
        </Heading>
        <Text fontSize='xl' marginBottom='10px' wordBreak={'keep-all'} textOverflow='ellipsis'>
          {description}
        </Text>
        <Text>{createdAt}</Text>
      </Box>
    </Box>
  );
};
export default PostCard;
