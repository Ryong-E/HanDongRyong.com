const path = require('path');
const AllPostTemplate = path.resolve(`./src/templates/AllPostTemplate.tsx`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
          id
          body
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;
  const allPostsNumPages = Math.ceil(posts.length / 10);
  Array.from({ length: allPostsNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: AllPostTemplate,
      context: {
        limit: 10,
        skip: i * 10,
        numPages: allPostsNumPages,
        currentPage: i + 1,
      },
    });
  });
};
