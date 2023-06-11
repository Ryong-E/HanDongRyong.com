import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { FontColor } from 'styles/color';
import { PostFrontMatter } from 'types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostCard = ({ title, slug, createdAt, description, thumbnail }: PostFrontMatter) => {
  return (
    <Link to={`/post/${slug}`} style={{ width: '100%' }}>
      <Box
        display='flex'
        flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
        height='100%'
        width='100%'
        fontFamily='Pretendard'
        alignItems={{ sm: 'left', md: 'center' }}
        _hover={{
          '& > div:first-child': {
            transform: 'translateY(-10px)',
            boxShadow: '2xl',
          },
          '& h1': {
            color: FontColor.highlightColor,
          },
        }}
      >
        <Box
          transition='0.2s ease-in-out'
          width={{ sm: '100%', md: '250px' }}
          height={{ sm: '200px', md: '250px' }}
          marginRight={{ sm: '0', md: '50px', lg: '50px' }}
          marginBottom={{ sm: '20px', md: '0' }}
          borderRadius='20px'
        >
          <GatsbyImage
            objectFit='cover'
            style={{ width: '100%', height: '100%', borderRadius: '20px' }}
            image={thumbnail}
            alt={'thmbnail'}
          ></GatsbyImage>
        </Box>
        <Box maxWidth={{ sm: '100%', md: '60%' }}>
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
