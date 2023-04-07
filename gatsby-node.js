const { resolve } = require('path');
const AllPostTemplate = resolve('./src/templates/AllPostTemplate.tsx');
const PostPage = resolve('./src/templates/PostPage.tsx');

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
            thumbnail
            title
            tags
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const POST_PER_PAGE = 10;

  const posts = result.data.allPosts.nodes;
  const allPostsPages = Math.ceil(posts.length / POST_PER_PAGE);

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

  posts.forEach((post, i) => {
    createPage({
      path: `post/${post.frontmatter.slug}`,
      component: `${PostPage}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
      },
    });
  });
};
