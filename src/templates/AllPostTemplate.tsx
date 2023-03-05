import { GatsbyGraphQLType, graphql, PageProps } from 'gatsby';
import React from 'react';
import MainLayOut from '../components/MainLayOut';
import PostCard from '../components/PostCard';

export const query = graphql`
  query AllPostTemplate {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      pageInfo {
        currentPage
        pageCount
      }
      nodes {
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
  }
`;
interface AllPostTemplateProps {
  data: GatsbyTypes.AllPostTemplateQuery;
}
export default function AllPostTemplate({ data }: AllPostTemplateProps) {
  const currentPage = data.allMdx.pageInfo.currentPage;
  const pageCount = data.allMdx.pageInfo.pageCount;
  const posts = data.allMdx.nodes;
  return (
    <>
      <MainLayOut>
        <PostCard posts={posts} />
      </MainLayOut>
    </>
  );
}
