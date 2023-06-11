import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import Giscus from 'components/Giscus';
import PostLayout from 'components/layout/PostLayout';
import MdxConvert from 'components/MdxConvert';
import Toc from 'components/Toc';
import { graphql, HeadFC } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';

export const query = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        createdAt
        description
        slug
        tags
        title
        updatedAt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      tableOfContents
    }
  }
`;
interface PostPageProps {
  data: GatsbyTypes.PostQuery;
  children: React.ReactNode;
}
const PostPage = ({ data, children }: PostPageProps) => {
  const tableOfContents = data.mdx?.tableOfContents;
  return (
    <PostLayout>
      <Box as='article' width='100%' minWidth={{ sm: '0', xl: '700px' }} paddingBottom='300px'>
        <Box marginTop='50px'>
          <GatsbyImage
            style={{
              borderRadius: '20px',
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
            alt='thumbnail'
            image={data.mdx?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!}
          />
        </Box>
        <Heading marginTop='60px' fontWeight='700' fontSize='48px' marginBottom='10px'>
          {data.mdx?.frontmatter?.title}
        </Heading>
        <Box marginBottom='50px'>
          <Text width='auto' marginBottom='20px'>
            {data.mdx?.frontmatter?.createdAt}
          </Text>
          <Divider borderBottomWidth='3px' borderColor='blackAlpha.400' borderRadius='20px' />
        </Box>
        <MdxConvert mdxContent={children} />
        <Giscus />
      </Box>
      <Box as='nav' width='300px' marginLeft='100px' display={{ sm: 'none', xl: 'block' }}>
        <Toc tableOfContents={tableOfContents} />
      </Box>
    </PostLayout>
  );
};

export const Head: HeadFC<GatsbyTypes.PostQuery> = ({ data }) => {
  const title = data.mdx?.frontmatter?.title!;
  const description = data.mdx?.frontmatter?.description!;
  const ogImage = data.mdx?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!;
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='naver-site-verification' content='4fc69b1ccb5d3fe134d2663f45be860476f4d8ef' />

      <meta
        property='og:url'
        content={`https://handongryong.com/post/${data.mdx?.frontmatter?.slug}`}
      />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={getSrc(ogImage)} />
    </>
  );
};
export default PostPage;
