const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              category
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const { id } = edge.node;
      let slugi = edge.node.fields.slug;

      if (slugi.substring(0, 13) === '/metamorfozy/') {
        return;
      }
      console.log(slugi);

      if (slugi.substring(0, 6) === '/blog/') {
        const kebab = _.kebabCase(edge.node.frontmatter.category);
        slugi = `/blog/${kebab}/${slugi.slice(6)}`;
      }
      createPage({
        path: slugi,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
