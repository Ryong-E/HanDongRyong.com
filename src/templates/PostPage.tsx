import { Box, Image } from '@chakra-ui/react';
import Giscus from 'components/Giscus';
import PostLayout from 'components/layout/PostLayout';
import MdxConvert from 'components/MdxConvert';
import Toc from 'components/Toc';
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
      tableOfContents
    }
  }
`;

const PostPage = ({ data, children }: { data: any; children: React.ReactNode }) => {
  const thumbnail = data.mdx.frontmatter.thumbnail;
  const tableOfContents = data.mdx.tableOfContents;
  return (
    <PostLayout>
      <Box as='article' width='100%' minWidth={{ sm: '0', xl: '700px' }} paddingBottom='300px'>
        <Image src={thumbnail} htmlWidth='100%' borderRadius='10px' marginBottom='100px' />
        <MdxConvert mdxContent={children} />
        <Giscus />
      </Box>
      <Box as='nav' width='300px' marginLeft='100px' display={{ sm: 'none', xl: 'block' }}>
        <Toc tableOfContents={tableOfContents} />
      </Box>
    </PostLayout>
  );
};
export default PostPage;
