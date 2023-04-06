import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from 'components/CodeBlock';
import PostLayout from 'components/layout/PostLayout';
import { graphql } from 'gatsby';

export const query = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        createdAt
        description
        slug
        tags
        thumbnail
        title
        updatedAt
      }
    }
  }
`;

const components = {
  h1: (props: Object) => <Heading as='h1' fontSize='36px' mt='60px' mb='15px' {...props}></Heading>,
  h2: (props: Object) => <Heading as='h2' fontSize='32px' mt='60px' mb='15px' {...props}></Heading>,
  h3: (props: Object) => <Heading as='h3' fontSize='26px' mt='60px' mb='15px' {...props}></Heading>,
  h4: (props: Object) => <Heading as='h4' fontSize='22px' mt='60px' mb='15px' {...props}></Heading>,

  img: (props: Object) => <Image {...props} width='100%' />,
  hr: (props: Object) => (
    <Text as='hr' mt='20px' mb='20px' {...props} borderTop='2px solid #e2e2e2e2' />
  ),
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
        <Text as='code' fontWeight='bold'>
          {children}
        </Text>
      );
    }
    return CodeBlock(children, className);
  },
};
const PostPage = ({ data, children }: { data: any; children: React.ReactNode }) => {
  const thumbnail = data.mdx.frontmatter.thumbnail;

  return (
    <PostLayout>
      <Image src={thumbnail} width='100%' borderRadius='10px' />
      <MDXProvider components={components}>{children}</MDXProvider>
    </PostLayout>
  );
};
export default PostPage;
