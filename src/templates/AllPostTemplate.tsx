import { Box } from '@chakra-ui/react';
import PostCard from 'components/card/PostCard';
import MainLayOut from 'components/layout/MainLayOut';
import Pagenation from 'components/Pagenation';
import { graphql } from 'gatsby';

export const query = graphql`
  query AllPostTemplate($limit: Int, $skip: Int) {
    allMdx(sort: { frontmatter: { createdAt: DESC } }, skip: $skip, limit: $limit) {
      nodes {
        frontmatter {
          createdAt
          description
          thumbnail
          title
          tags
          slug
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;

const AllPostTemplate = ({ data }: { data: GatsbyTypes.AllPostTemplateQuery }) => {
  const currentPage = data.allMdx.pageInfo.currentPage;
  const totalPageNumber = data.allMdx.pageInfo.pageCount;

  return (
    <MainLayOut>
      <Box
        width='100%'
        height='100%'
        as='section'
        padding='50px'
        maxW='calc(100% - 20px)'
        display='flex'
        justifyContent={'center'}
        alignItems='center'
        flexDirection='column'
        gap={20}
      >
        {data.allMdx.nodes.map((data, i) => {
          return <PostCard article={data?.frontmatter!} key={i} />;
        })}
      </Box>
      {totalPageNumber > 1 && (
        <Pagenation currentPage={currentPage} totalPageNumber={totalPageNumber} />
      )}
    </MainLayOut>
  );
};
export default AllPostTemplate;
