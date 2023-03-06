import { Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <a href="https://ryong.oopy.io" target="_blank" rel="noreferrer">
      <Text
        fontSize={16}
        fontStyle="italic"
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
