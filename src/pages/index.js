import React from 'react';
import { graphql } from 'gatsby';

import Index from '../components/index/index';

export default function index({ data }) {
  const { threeArticles, twoPeople } = data;
  return <Index twoPeople={twoPeople} threeArticles={threeArticles} />;
}

export const indexQuery = graphql`
  query indexQuery {
    twoPeople: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "people" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      nodes {
        html
        frontmatter {
          achieved
          imageAfter
          imageBefore
          title
          transformTime
        }
      }
    }
    threeArticles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        html
        frontmatter {
          title
          date
          category
        }
        fields {
          slug
        }
      }
    }
  }
`;
