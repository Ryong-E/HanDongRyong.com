import { Box, Flex, Heading, Kbd, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import CodeBlock from './CodeBlock';

const components = {
  h1: (props: Object) => (
    <Heading
      as='h1'
      fontFamily='ChosunGu'
      fontSize='36px'
      mt='40px'
      pt='70px'
      mb='5px'
      {...props}
    ></Heading>
  ),
  h2: (props: Object) => (
    <Heading
      as='h2'
      fontFamily='ChosunGu'
      fontSize='32px'
      mt='40px'
      pt='70px'
      mb='5px'
      {...props}
    ></Heading>
  ),
  h3: (props: Object) => (
    <Heading
      as='h3'
      fontFamily='ChosunGu'
      fontSize='28px'
      mt='40px'
      pt='70px'
      mb='5px'
      {...props}
    ></Heading>
  ),
  h4: (props: Object) => (
    <Heading
      as='h4'
      fontFamily='ChosunGu'
      fontSize='26px'
      mt='40px'
      pt='70px'
      mb='5px'
      {...props}
    ></Heading>
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
      <Flex
        as='blockquote'
        {...props}
        _dark={{
          backgroundColor: 'rgb(39, 158, 255,0.1)',
          color: '#D7F3FA',
        }}
        color='#00346d'
        backgroundColor='blue.50'
        wordBreak={'keep-all'}
        borderRadius='10px'
        padding='10px 15px'
        margin='10px 0 20px 0'
      >
        <Box display='flex' alignItems='center' margin='0 10px'>
          <svg
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='#D7F3FA'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </Box>
        <Box>
          <span>{children}</span>
        </Box>
      </Flex>
    );
  },
  p: (props: Object) => <Text fontSize='16px' mt='16px' mb='16px' lineHeight='1.8' {...props} />,

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
      fontSize='16px'
      mt='15px'
      listStylePos='inside'
      sx={{ '& ::marker ': { fontWeight: 'bold' } }}
      mb='15px'
      {...props}
    />
  ),
  li: (props: Object) => <Box as='li' {...props} lineHeight='32px' sx={{}} />,
  ul: (props: Object) => (
    <Box as='ul' fontSize='16px' mt='15px' mb='15px' listStylePos='inside' {...props} />
  ),
  code: ({ ...props }) => {
    const { className, children } = props;
    const isCode = /language-(\w+)/.exec(className || '');

    if (!isCode) {
      return (
        <Kbd
          marginRight='3px'
          _dark={{ borderColor: 'whiteAlpha.300', backgroundColor: 'whiteAlpha.100' }}
          borderColor={'gray.400'}
          paddingBottom='3px'
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
