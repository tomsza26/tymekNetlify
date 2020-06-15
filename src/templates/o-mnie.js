import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

const Omnie = ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <>
      <Helmet title="O mnie - Pakuj z Tymkiem" />
      <div className="PCont" id="PMHeader">
        <div className="PInner" id="aboutContainer">
          <div
            className="PHeader"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            O MNIE
          </div>
          <div
            id="PblogText"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Omnie;

export const postQuery = graphql`
  query WspolpracaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "o-mnie" } }) {
      html
    }
  }
`;
