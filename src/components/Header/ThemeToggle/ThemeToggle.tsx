import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Moonicon from './MoonIcon';
import SunIcon from './SunIcon';

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(Moonicon, SunIcon);

  return (
    <IconButton
      display='flex'
      alignItems='center'
      borderRadius='3xl'
      variant='unstyled'
      onClick={() => toggleColorMode()}
      aria-label='toggle'
      icon={<SwitchIcon />}
      zIndex='300'
      _dark={{
        _hover: { backgroundColor: 'whiteAlpha.200' },
      }}
      _hover={{
        backgroundColor: 'blackAlpha.200',
      }}
    ></IconButton>
  );
};
export default ThemeToggle;
