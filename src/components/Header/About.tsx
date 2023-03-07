import { Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import mobileCheck from '../../utils/mobileCheck';

const About = () => {
  const isMobile = useMemo(() => {
    return mobileCheck();
  }, []);
  return (
    <a href="https://ryong.oopy.io" target="_blank" rel="noreferrer">
      <Text
        fontSize={16}
        fontStyle="italic"
        _hover={{ textDecoration: isMobile ? 'none' : 'underline' }}
        padding={2}
        fontWeight={700}
      >
        About
      </Text>
    </a>
  );
};
export default About;
