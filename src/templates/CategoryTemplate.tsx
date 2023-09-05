import { Box } from '@chakra-ui/react';
import PostCard from 'components/card/PostCard';
import Categorys from 'components/Categorys';
import MainLayOut from 'components/layout/MainLayOut';
import Pagenation from 'components/Pagenation';
import { graphql, HeadFC } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

export const query = graphql`
  query CategoryTemplate($limit: Int, $skip: Int, $category: [String]) {
    allMdx(
      filter: { frontmatter: { tags: { in: $category } } }
      sort: { frontmatter: { createdAt: DESC } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        frontmatter {
          tags
          slug
          description
          createdAt
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          updatedAt
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
    imageSharp(fluid: { originalName: { eq: "og-image.png" } }) {
      gatsbyImageData
    }
  }
`;

const CategoryTemplate = ({
  data,
  pageContext,
}: {
  data: GatsbyTypes.CategoryTemplateQuery;
  pageContext: any;
}) => {
  const currentPage = data.allMdx.pageInfo.currentPage;
  const totalPageNumber = data.allMdx.pageInfo.pageCount;

  return (
    <MainLayOut>
      <Box
        width='100%'
        height='100%'
        as='section'
        padding='0 20px'
        maxW='calc(100% - 20px)'
        display='flex'
        justifyContent={'center'}
        alignItems='center'
        flexDirection='column'
        gap={20}
      >
        <Categorys currentCategory={pageContext.category} />
        {data.allMdx.nodes.map((data, i) => (
          <PostCard
            slug={data.frontmatter?.slug!}
            key={i}
            title={data.frontmatter?.title!}
            description={data.frontmatter?.description!}
            createdAt={data.frontmatter?.createdAt!}
            tags={data.frontmatter?.tags!}
            thumbnail={data.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!}
          />
        ))}
      </Box>
      {totalPageNumber > 1 && (
        <Pagenation currentPage={currentPage} totalPageNumber={totalPageNumber} />
      )}
    </MainLayOut>
  );
};

export const Head: HeadFC<GatsbyTypes.AllPostTemplateQuery> = ({ data }) => {
  const ogImage = data.imageSharp?.gatsbyImageData!;
  const title = '한동룡의 기술 블로그';
  const description = '주니어 프론트엔드 개발자 한동룡 입니다';

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='naver-site-verification' content='4fc69b1ccb5d3fe134d2663f45be860476f4d8ef' />
      <meta property='og:url' content='https://handongryong.com' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={getSrc(ogImage)} />
    </>
  );
};

export default CategoryTemplate;
