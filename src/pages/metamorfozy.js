import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

function Metamorfozy({ data }) {
  const { nodes } = data.allMarkdownRemark;

  const allOf = nodes.map((d, i) => {
    return (
      <div className="PmetaArticle" key={d.frontmatter.title}>
        <div className="PmetaImages">
          <img
            src={d.frontmatter.imageBefore}
            alt="metamorfozaPrzed"
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-once="true"
          />
          <img
            src={d.frontmatter.imageAfter}
            alt="metamorfozaPo"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-once="true"
          />
        </div>
        <div
          className="PmetaContentCont"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-once="true"
        >
          <div className="PmetaNames">{d.frontmatter.title}</div>
          <div className="PmetaTarget">
            <span className="PmetaA">osiągnęliśmy: </span>
            {d.frontmatter.achieved}
          </div>
          <div className="PmetaDate">
            <span className="PmetaD">czas: </span>
            {d.frontmatter.transformTime}
          </div>
          <div
            className="PmetaDesc"
            dangerouslySetInnerHTML={{ __html: d.html }}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <Helmet title="Metamorfozy - Pakuj z Tymkiem" />
      <div className="PCont" id="PMMeta">
        <div className="PInner" id="PmetaCont">
          <div
            className="PHeader"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            METAMORFOZY
          </div>
          <div className="PmetaArticlesCont">{allOf}</div>
        </div>
      </div>
    </>
  );
}

export default Metamorfozy;

export const metaQuery = graphql`
  query metaQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "people" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
  }
`;
