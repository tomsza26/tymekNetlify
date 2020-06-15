import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import PblogNavigation from '../components/pg/PblogNavigation';
import BlogNav from '../components/pg/blogNav';

function Blog({ data }) {
  const { nodes } = data.allMarkdownRemark;
  return (
    <>
      <Helmet title="Blog - Pakuj z Tymkiem" />
      <div className="PCont" id="PMBlog">
        <div className="PInner" id="Pblog">
          <BlogNav />
          <div className="PblogArticlesCont">
            <PblogNavigation info={nodes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

export const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          title
          date
          featuredimage
          category
        }
        fields {
          slug
        }
      }
    }
  }
`;
