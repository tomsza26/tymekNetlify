import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

function Metam(props) {
  const { nodes } = props.twoPeople;

  const meta = nodes.map((d) => {
    return (
      <div className="metaArticle" key={d.frontmatter.title}>
        <div className="metaArticleImages">
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
          className="metaContentCont"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-once="true"
        >
          <div className="metaNames">{d.frontmatter.title}</div>
          <div className="metaTarget">
            <span className="metaA">osiągnęliśmy: </span>
            {d.frontmatter.achieved}
          </div>
          <div className="metaDate">
            <span className="metaD">czas: </span>
            {d.frontmatter.transformTime}
          </div>
          <div
            className="metaDesc"
            dangerouslySetInnerHTML={{ __html: d.html }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div className="metamorfozy">
      <div className="metaCont">
        <div className="metaHeader">Zobacz, komu już pomogłem!</div>
        <div className="metaArticlesCont">{meta}</div>
      </div>
      <Link to="/metamorfozy#PMMeta">
        <div id="metaButton">
          WIĘCEJ METAMORFOZ
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </Link>
    </div>
  );
}

export default Metam;
