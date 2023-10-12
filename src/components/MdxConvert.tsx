import { Box, ComponentDefaultProps, Flex, Heading, Kbd, Link, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

const components = {
  h1: (props: Object) => (
    <Heading as='h1' fontSize='36px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h2: (props: Object) => (
    <Heading as='h2' fontSize='32px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h3: (props: Object) => (
    <Heading as='h3' fontSize='28px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  h4: (props: Object) => (
    <Heading as='h4' fontSize='24px' mt='40px' pt='70px' mb='20px' {...props}></Heading>
  ),
  a: (props: Object) => {
    return (
      <Link
        fontWeight={700}
        _hover={{ textDecoration: 'underline' }}
        color='blue.400'
        target='_blank'
        {...props}
      />
    );
  },
  Callout,
  blockquote: (props: ComponentDefaultProps) => {
    const { children } = props;
    return <Callout>{children}</Callout>;
  },
  p: (props: Object) => (
    <Text fontSize={{ sm: '16px', md: '18px' }} mt='20px' lineHeight='1.8' {...props} />
  ),

  hr: (props: Object) => (
    <Text as='hr' mt='20px' mb='20px' {...props} borderTop='2px solid #e2e2e2e2' />
  ),
  strong: ({ ...props }) => {
    const { children } = props;
    return (
      <Text as='span' fontWeight='700'>
        {children}
      </Text>
    );
  },
  ol: (props: Object) => (
    <Box
      as='ol'
      fontSize={{ sm: '16px', md: '18px' }}
      mt='15px'
      listStylePos='inside'
      sx={{ '& ::marker ': { fontWeight: 'bold' } }}
      mb='15px'
      {...props}
    />
  ),
  li: (props: Object) => <Box as='li' {...props} lineHeight='32px' sx={{}} mb='20px' />,
  ul: (props: Object) => (
    <Box
      as='ul'
      fontSize={{ sm: '16px', md: '18px' }}
      mt='15px'
      mb='15px'
      listStylePos='inside'
      {...props}
    />
  ),
  code: ({ ...props }) => {
    const { className, children } = props;
    const isCode = /language-(\w+)/.exec(className || '');

    if (!isCode) {
      return (
        <Kbd
          as='span'
          fontSize='14px'
          marginRight='3px'
          position={'relative'}
          top={'-2px'}
          backgroundColor='whiteAlpha.100'
          _dark={{ borderColor: 'whiteAlpha.300', backgroundColor: 'whiteAlpha.100' }}
          borderColor={'blackAlpha.400'}
          padding='3px 4px'
          fontFamily='ChosunGu'
        >
          {children}
        </Kbd>
      );
    }
    return CodeBlock(children, className);
  },
};

const MdxConvert = ({ mdxContent }: { mdxContent: React.ReactNode }) => {
  return <MDXProvider components={components}>{mdxContent}</MDXProvider>;
};
export default MdxConvert;
