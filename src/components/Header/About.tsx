import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <a href='https://handongryong.super.site/' target='_blank' rel='noreferrer'>
      <Text
        fontSize={16}
        fontStyle='italic'
        _hover={{ textDecoration: 'underline' }}
        padding={2}
        fontWeight={700}
      >
        About
      </Text>
    </a>
  );
};
export default About;
