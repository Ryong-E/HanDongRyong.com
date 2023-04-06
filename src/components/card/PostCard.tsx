import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FontColor } from 'styles/color';
import { Post } from 'types';

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  const { slug, createdAt, description, title, thumbnail } = post;
  return (
    <Link
      href={`post/${slug}`}
      textDecoration='none'
      width='100%'
      _hover={{ textDecoration: 'none' }}
    >
      <Box
        display='flex'
        flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
        height='100%'
        width='100%'
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
          width={{ sm: '100%', md: '250px', lg: '250px' }}
          height={{ sm: '200px', md: '250px', lg: '250px' }}
          objectFit='cover'
          marginRight={{ sm: '0', md: '50px', lg: '50px' }}
          marginBottom={{ sm: '20px', md: '0' }}
          borderRadius='20px'
        />
        <Box>
          <Heading
            as='h1'
            fontSize={{ sm: '26px', md: '36px', lg: '36px' }}
            marginBottom='20px'
            wordBreak='keep-all'
            textOverflow='ellipsis'
          >
            {title}
          </Heading>
          <Text fontSize='xl' marginBottom='10px' wordBreak={'keep-all'} textOverflow='ellipsis'>
            {description}
          </Text>
          <Text color='gray.400'>{createdAt}</Text>
        </Box>
      </Box>
    </Link>
  );
};
export default PostCard;
