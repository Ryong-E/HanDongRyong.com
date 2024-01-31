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
    title: `한동룡의 기술 블로그`,
    description: '주니어 프론트엔드 개발자 한동룡입니다',
    siteUrl: `https://handongryong.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify',
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
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              wrapperStyle: `margin: 25px 0px; z-index: 0`,
              showCaptions: true,
            },
          },
        ],
        mdxOptions: {
          rehypePlugins: [
            wrapESMPlugin(`rehype-slug`),
            [
              wrapESMPlugin(`rehype-autolink-headings`),
              {
                behavior: `after`,
              },
            ],
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
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thumbnails',
        path: `${__dirname}/thumbnails`,
      },
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
        trackingId: 'G-MLZH5RGMKJ',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://handongryong.com',
        sitemap: 'https://handongryong.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
