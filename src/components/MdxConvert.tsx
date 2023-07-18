import { Box, Code, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import CodeBlock from './CodeBlock';

const components = {
  h1: (props: Object) => (
    <Heading as='h1' fontSize='32px' mt='40px' pt='70px' mb='5px' {...props}></Heading>
  ),
  h2: (props: Object) => (
    <Heading as='h2' fontSize='28px' mt='40px' pt='70px' mb='5px' {...props}></Heading>
  ),
  h3: (props: Object) => (
    <Heading as='h3' fontSize='26px' mt='40px' pt='70px' mb='5px' {...props}></Heading>
  ),
  h4: (props: Object) => (
    <Heading as='h4' fontSize='22px' mt='40px' pt='70px' mb='5px' {...props}></Heading>
  ),
  a: (props: Object) => {
    return (
      <Box
        as='a'
        fontWeight={700}
        _hover={{ textDecoration: 'underline' }}
        color='blue.400'
        target='_blank'
        {...props}
      />
    );
  },
  blockquote: ({ ...props }) => {
    const { children } = props;
    return (
      <Box
        backgroundColor={'blue.800'}
        _dark={{ backgroundColor: 'white' }}
        color='black'
        paddingLeft='5px'
        borderRadius='10px'
        margin='20px 0'
        as='blockquote'
        {...props}
      >
        <Flex
          backgroundColor='blue.100'
          _dark={{ backgroundColor: 'blue.800' }}
          wordBreak={'keep-all'}
          borderRadius='10px'
          padding='20px 0'
        >
          <Box display='flex' alignItems='center' margin='0 10px'>
            <svg
              className='feather feather-help-circle'
              fill='white'
              height='24'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
              <line x1='12' x2='12.01' y1='17' y2='17' />
            </svg>
          </Box>
          <Box _dark={{ color: 'white' }}>
            <span>{children}</span>
          </Box>
        </Flex>
      </Box>
    );
  },
  p: (props: Object) => <Text fontSize='18px' mt='16px' mb='16px' lineHeight='1.8' {...props} />,
  img: (props: Object) => <Image {...props} width='100%' margin='20px 0' />,
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
      fontSize='18px'
      mt='15px'
      listStylePos='inside'
      sx={{ '& ::marker ': { fontWeight: 'bold' } }}
      mb='15px'
      {...props}
    />
  ),
  li: (props: Object) => (
    <Box
      as='li'
      {...props}
      lineHeight='36px'
      sx={{ '&::marker': { fontSize: '20px' }, '& ul': { marginLeft: '15px' } }}
    />
  ),
  ul: (props: Object) => (
    <Box as='ul' fontSize='18px' mt='15px' mb='15px' listStylePos='inside' {...props} />
  ),
  code: ({ ...props }) => {
    const { className, children } = props;
    const isCode = /language-(\w+)/.exec(className || '');

    if (!isCode) {
      return (
        <Code borderRadius='5px' bg='#dddddd' fontWeight='700'>
          {children}
        </Code>
      );
    }
    return CodeBlock(children, className);
  },
};

const MdxConvert = ({ mdxContent }: { mdxContent: React.ReactNode }) => {
  return <MDXProvider components={components}>{mdxContent}</MDXProvider>;
};
export default MdxConvert;
