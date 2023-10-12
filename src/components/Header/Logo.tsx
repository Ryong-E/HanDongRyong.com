import { Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Link to='/'>
      <Text fontSize={24} fontWeight='700' padding={2} fontStyle='italic'>
        Ryong⥾
      </Text>
    </Link>
  );
};

export default Logo;
