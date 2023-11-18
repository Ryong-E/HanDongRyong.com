import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <a
      href='https://www.figma.com/file/F6FL05hGZ2Dqkl8B8NMEhC/%ED%95%9C%EB%8F%99%EB%A3%A1-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=juTDnEH5UqRPqOzf-1'
      target='_blank'
      rel='noreferrer'
    >
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
