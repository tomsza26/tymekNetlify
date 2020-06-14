import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

function Pwspolpraca({ data }) {
  const { html } = data.markdownRemark;
  return (
    <>
      <Helmet title="Współpraca - Pakuj z Tymkiem" />
      <div className="PCont" id="PMWspol">
        <div className="PInner" id="coopCont">
          <div
            className="PHeader"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            WSPÓŁPRACA
          </div>
          <div
            className="Pcoop"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Pwspolpraca;

export const postQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "wspolpraca" } }) {
      html
    }
  }
`;
