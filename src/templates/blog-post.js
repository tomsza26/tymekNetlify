import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Particle({ data }) {
  const {
    category,
    date,
    featuredimage,
    title,
  } = data.markdownRemark.frontmatter;
  return (
    <>
      <Helmet title={`${title} - Pakuj z Tymkiem`} />
      <div className="PCont" id="PMAtricle">
        <div className="PInner" id="Particle">
          <div
            className="PHeader"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {title}
          </div>
          <div
            className="ParticleTextCont"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="ParticleCate">{category}</div>
            <div className="ParticleDate">
              <FontAwesomeIcon icon={faCalendarAlt} /> {date}
            </div>
            <img
              src={featuredimage}
              alt="articleP"
              className="ParticleImg1"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
            />
            <div
              className="ParticleText"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
          <img
            src={featuredimage}
            alt="articleP"
            className="ParticleImg2"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="true"
          />
        </div>
      </div>
    </>
  );
}

export default Particle;

export const blogPostQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        category
        featuredimage
      }
    }
  }
`;
