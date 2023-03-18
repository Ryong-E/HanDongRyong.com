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
      _hover={{
        bgGradient:
          colorMode === 'dark'
            ? 'linear(to-b, #4299E1,#C4F1F9)'
            : 'linear(to-b, orange.100, purple.300)',
      }}
    ></IconButton>
  );
};
export default ThemeToggle;
