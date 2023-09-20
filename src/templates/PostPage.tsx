import { Box, Heading, Text } from '@chakra-ui/react';
import Giscus from 'components/Giscus';
import PostLayout from 'components/layout/PostLayout';
import MdxConvert from 'components/MdxConvert';
import { Profile } from 'components/Profile';
import Toc from 'components/Toc';
import { CATEGORY_TANSLATE } from 'constants/title';
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
  pageContext: {
    readingTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
    };
  };
  children: React.ReactNode;
}
const PostPage = ({ data, children, pageContext }: PostPageProps) => {
  const tableOfContents = data.mdx?.tableOfContents;

  return (
    <PostLayout>
      <Box as='article' width='100%' minWidth={{ sm: '0', xl: '700px' }} paddingBottom='300px'>
        <Heading as='h1' marginTop='60px' fontWeight='700' size='xl' marginBottom='10px'>
          {data.mdx?.frontmatter?.title}
        </Heading>
        <Box marginBottom='30px' display='flex' gap='20px'>
          <Text width='auto' marginBottom='20px'>
            {data.mdx?.frontmatter?.createdAt}
          </Text>
          <Text>{pageContext.readingTime.text}</Text>
        </Box>
        <Box marginBottom='50px' display='flex'>
          {data.mdx?.frontmatter?.tags?.map((tag) => (
            <Text
              borderRadius='20px'
              display='flex'
              alignItems='center'
              padding='5px 10px'
              justifyContent='center'
              width='auto'
              fontWeight='700'
              border='1px solid black'
              _dark={{ borderColor: 'white' }}
            >
              {CATEGORY_TANSLATE[tag!]}
            </Text>
          ))}
        </Box>
        <Box marginTop='50px' marginBottom='50px'>
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
        <MdxConvert mdxContent={children} />

        <Profile />
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
      <meta name='author' content='한동룡'></meta>
      <meta name='author' content='동룡'></meta>
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
