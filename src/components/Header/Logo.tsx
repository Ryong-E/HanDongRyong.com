import { Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import mobileCheck from '../../utils/mobileCheck';
const Logo = () => {
  const isMobile = useMemo(() => {
    return mobileCheck();
  }, []);

  return (
    <Link to="/">
      <Text
        fontSize={24}
        fontWeight="700"
        _hover={{ textDecoration: isMobile ? 'none' : 'underline' }}
        padding={2}
        fontStyle="italic"
      >
        Ryong⥾
      </Text>
    </Link>
  );
};

export default Logo;
