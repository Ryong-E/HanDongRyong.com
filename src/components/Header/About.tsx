import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <a href='https://ryong.super.site/' target='_blank' rel='noreferrer'>
      <Text
        position='relative'
        _after={{
          position: 'absolute',
          content: '""',
          height: '1px',
          bottom: '-1px',
          left: '0',
          width: '100%',
          bg: 'black',
          transition: 'transform 0.2s ease-out',
          transformOrigin: 'bottom right',
          transform: 'scaleX(0)',
        }}
        fontSize={16}
        fontStyle='italic'
        fontWeight={'bold'}
        _dark={{
          _after: {
            bg: 'white',
          },
        }}
        _hover={{
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        }}
      >
        Resume
      </Text>
    </a>
  );
};
export default About;
