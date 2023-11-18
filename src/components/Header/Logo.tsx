import { Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Link to='/'>
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
        fontSize={24}
        fontWeight='bold'
        fontStyle={'italic'}
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
        Ryong⥾
      </Text>
    </Link>
  );
};

export default Logo;
