import { Box, Spacer } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import About from './About';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle/ThemeToggle';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box
      overflow='hidden'
      width='100%'
      height='70px'
      position='sticky'
      zIndex='10'
      shadow={isSticky ? 'sm' : 'none'}
      as='header'
      top='0'
      paddingLeft={5}
      paddingRight={5}
      alignItems='center'
      display='flex'
      columnGap={4}
    >
      <Logo />
      <Spacer />
      <About />
      <ThemeToggle />
    </Box>
  );
};

export default Header;
