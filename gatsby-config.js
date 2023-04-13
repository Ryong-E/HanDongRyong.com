const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

module.exports = {
  siteMetadata: {
    title: `handongryong`,
    description: '주니어 프론트엔드 개발자 한동룡입니다',
    siteUrl: `https://handongryong.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
        mdxOptions: {
          rehypePlugins: [
            wrapESMPlugin(`rehype-slug`),
            [wrapESMPlugin(`rehype-autolink-headings`), { behavior: `after` }],
          ],
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-root-import',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
      __key: 'pages',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-CLPTY6DFH3',
        head: true,
      },
    },
  ],
};
