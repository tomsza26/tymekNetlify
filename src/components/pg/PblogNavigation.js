import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import shorten from '../../assets/functions/shorten';

function PblogNavigation(props) {
  if (props.info.length === 0) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Brak artykułów w podanej kategorii.
      </h1>
    );
  }
  const items = props.info.map((d) => {
    const { title, category, featuredimage, date } = d.frontmatter;
    let slug = d.fields.slug;
    const kebab = kebabCase(category);
    slug = `/blog/${kebab}/${slug.slice(6)}`;

    const text = shorten(d.html, 400);

    return (
      <Link to={slug} className="PblogArticle" key={title}>
        <div className="PblogCategory">{category}</div>
        <div className="PblogHeader">{title}</div>
        <img src={featuredimage} alt="articleP" className="PblogImg" />
        <div className="PblogText" dangerouslySetInnerHTML={{ __html: text }} />
        <div className="PblogDateCont">
          <FontAwesomeIcon icon={faCalendarAlt} /> {date}
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </Link>
    );
  });

  return <>{items}</>;
}

export default PblogNavigation;
