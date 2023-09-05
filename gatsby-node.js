const { resolve } = require('path');
const readingTime = require('reading-time');
const AllPostTemplate = resolve('./src/templates/AllPostTemplate.tsx');
const PostPage = resolve('./src/templates/PostPage.tsx');
const CategoryTemplate = resolve('./src/templates/CategoryTemplate.tsx');

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPosts: allMdx(sort: { frontmatter: { createdAt: DESC } }) {
        nodes {
          id
          frontmatter {
            createdAt
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            tags
            slug
          }
          internal {
            contentFilePath
          }
          body
        }
      }

      category: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          nodes {
            id
          }
        }
      }
    }
  `);

  const POST_PER_PAGE = 10;

  const posts = result.data.allPosts.nodes;
  const allPostsPages = Math.ceil(posts.length / POST_PER_PAGE);

  //전체 카테고리 페이지
  Array.from({ length: allPostsPages }).forEach((v, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: AllPostTemplate,
      context: {
        limit: POST_PER_PAGE,
        skip: i * POST_PER_PAGE,
        numPages: allPostsPages,
        currentPage: i + 1,
        posts,
      },
    });
  });

  //카테고리 필터 페이지
  result.data.category.group.forEach(({ fieldValue, nodes }) => {
    const allCategoryPageNumber = Math.ceil(nodes.length / POST_PER_PAGE);

    Array.from({ length: allCategoryPageNumber }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${fieldValue}` : `/${fieldValue}${i + 1}`,
        component: CategoryTemplate,
        context: {
          limit: POST_PER_PAGE,
          skip: i * POST_PER_PAGE,
          category: fieldValue,
        },
      });
    });
  });

  posts.forEach((post, i) => {
    createPage({
      path: `post/${post.frontmatter.slug}`,
      component: `${PostPage}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        readingTime: readingTime(post.body),
      },
    });
  });
};
