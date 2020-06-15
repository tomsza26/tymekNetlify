import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import shorten from '../../assets/functions/shorten';

function Blog(props) {
  const { nodes } = props.threeArticles;

  const blog = nodes.map((d, i) => {
    const { category, date, title } = d.frontmatter;
    let slug = d.fields.slug;
    const kebab = kebabCase(d.frontmatter.category);
    slug = `/blog/${kebab}/${slug.slice(6)}`;

    const text = shorten(d.html, 300);

    return (
      <Link
        to={slug}
        key={d.frontmatter.title}
        className="blogArs"
        id={`hel${i}`}
      >
        <div className="blogArticle">
          <div className="blogArticleCategory">{category}</div>
          <div className="blogArticleHeader">{title}</div>
          <div
            className="blogArticleContent"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className="blogArticleDate">
            <FontAwesomeIcon icon={faCalendarAlt} /> {date}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </div>
        </div>
      </Link>
    );
  });

  const blog2 = nodes.slice(1, 3).map((d, i) => {
    const { category, date, title } = d.frontmatter;
    let slug = d.fields.slug;
    const kebab = kebabCase(d.frontmatter.category);
    slug = `/blog/${kebab}/${slug.slice(6)}`;

    const text = shorten(d.html, 300);

    return (
      <Link
        to={slug}
        key={d.frontmatter.title}
        className="blogArs"
        id={`hel${i}`}
      >
        <div className="blogArticle">
          <div className="blogArticleCategory">{category}</div>
          <div className="blogArticleHeader">{title}</div>
          <div
            className="blogArticleContent"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className="blogArticleDate">
            <FontAwesomeIcon icon={faCalendarAlt} /> {date}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section id="blog">
      <header id="blogHeader">BLOG</header>
      <div id="headerContainer">
        <div className="blogContentHeader1">najnowsze artykuły</div>
        <div className="blogContentHeader">szybki start</div>
      </div>

      <div id="blogContainer">
        <div
          id="blogButtonsContainer"
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-once="true"
        >
          <Link to="/blog/dieta#navContainer">
            <div className="blogButton">dieta</div>
          </Link>
          <Link to="/blog/trening#navContainer">
            <div className="blogButton">trening</div>
          </Link>
          <Link to="/blog/jak_zaczac#navContainer">
            <div className="blogButton" id="blogStart">
              jak zacząć?
            </div>
          </Link>
          <Link to="/blog/ciekawostki#navContainer">
            <div className="blogButton">ciekawostki</div>
          </Link>
          <Link to="/blog/rozwoj_osobisty#navContainer">
            <div className="blogButton">rozwój osobisty</div>
          </Link>
          <Link to="/blog/plany_treningowe#navContainer">
            <div className="blogButton">plany treningowe</div>
          </Link>
        </div>
        <div id="blogContentHeader2">najnowsze artykuły</div>
        <div id="blogGrid">{blog}</div>
        <div id="blogRes">{blog2}</div>
      </div>
    </section>
  );
}

export default Blog;
