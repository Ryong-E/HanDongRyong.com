import { graphql, useStaticQuery } from 'gatsby';
import { Box, Grid } from '@chakra-ui/react';
import SeriesCard from 'components/card/SeriesCard';
import MainLayOut from 'components/layout/MainLayOut';

interface SeriesData {
  totalCount: number;
  tag: string;
}

const IndexPage = () => {
  const SeriesData = useStaticQuery(graphql`
    query SeriesTemplate {
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          totalCount
          tag: fieldValue
        }
      }
    }
  `);

  return (
    <MainLayOut>
      <Box width='100%' height='100%' as='section' padding='10px' maxW='calc(100% - 20px)'>
        <Grid templateColumns={{ lg: 'repeat(3,1fr)', md: 'repeat(2,1fr)' }} gap='10'>
          {SeriesData.allMdx.group.map((data: SeriesData) => (
            <SeriesCard tags={data.tag} count={data.totalCount} key={data.tag} />
          ))}
        </Grid>
      </Box>
    </MainLayOut>
  );
};
export default IndexPage;
