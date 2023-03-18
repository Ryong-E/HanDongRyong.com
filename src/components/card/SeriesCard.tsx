import { Box, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { SeriesBgColor } from 'styles/color';

const SeriesCard = ({ count, tags }: { count: number; tags: string }) => {
  return (
    <Link to='/'>
      <GridItem
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: '2xl',
        }}
        borderRadius='20px'
        transitionDuration='0.3s'
      >
        <Box
          display={{
            base: 'flex',
            sm: 'flex',
            md: 'block',
            lg: 'block',
          }}
        >
          <Box
            width={{
              lg: '100%',
              md: '100%',
              sm: '100px',
            }}
          >
            <Image
              src={`https://kr.object.ncloudstorage.com/handongryong/${tags}.png`}
              alt='thumbnail'
              width='100%'
              height={{
                lg: '350px',
                md: '400px',
                sm: '100px',
              }}
              objectFit={'cover'}
              borderTopLeftRadius={'20px'}
              borderBottomLeftRadius={{
                sm: '20px',
                md: '0',
                lg: '0',
              }}
              borderTopRightRadius={{
                sm: '0',
                md: '20px',
                lg: '20px',
              }}
            />
          </Box>
          <Box
            padding={{ lg: 18, md: 18, sm: 13 }}
            width={{
              lg: '100%',
              md: '100%',
              sm: 'calc(100% - 100px)',
            }}
            height={{
              sm: '100px',
              md: 'auto',
              lg: 'auto',
            }}
            backgroundColor={SeriesBgColor[tags]}
            borderBottomLeftRadius={{
              sm: '0',
              md: '20px',
              lg: '20px',
            }}
            borderBottomEndRadius={{
              sm: '20px',
              md: '20px',
              lg: '20px',
            }}
            borderTopRightRadius={{
              sm: '20px',
              md: '0',
              lg: '0',
            }}
          >
            <Box
              display={'flex'}
              flexDirection='column'
              justifyContent={'flex-start'}
              alignItems='left'
              color='white'
            >
              <Text fontSize='14px'>Ryongs Series</Text>
              <Heading fontSize='20px' marginBottom='10px'>
                {tags}
              </Heading>
              <Text fontSize='14px' opacity='0.7'>
                아티클 {count}개
              </Text>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Link>
  );
};
export default SeriesCard;
