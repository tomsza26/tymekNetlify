import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

function Blog() {
  const shorten = (str, maxLen, separator = ' ') => {
    if (str.length <= maxLen) return str;
    return `${str.substr(0, str.lastIndexOf(separator, maxLen))}...`;
  };

  // let blog = articles
  //   .sort(function (a, b) {
  //     return b.id - a.id;
  //   })
  //   .slice(0, 3)
  //   .map((data, index) => {
  //     const cate = data.kategoria
  //       .replace(/\s+/g, '_')
  //       .replace('ą', 'a')
  //       .replace('ć', 'c')
  //       .replace('ó', 'o')
  //       .replace(/[^\w\s]/gi, '')
  //       .toLowerCase();

  //     return (
  //       <Link
  //         to={`/blog/${cate}/${data.id}#navContainer`}
  //         key={index}
  //         className="blogArs"
  //         id={`hel${index}`}
  //       >
  //         <div className="blogArticle">
  //           <div className="blogArticleCategory">{data.kategoria}</div>
  //           <div className="blogArticleHeader">{data.nazwa}</div>
  //           <div className="blogArticleContent">{shorten(data.tekst, 300)}</div>
  //           <div className="blogArticleDate">
  //             <FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
  //             <FontAwesomeIcon icon={faExternalLinkAlt} />
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   });

  // let blog2 = articles
  //   .sort(function (a, b) {
  //     return b.id - a.id;
  //   })
  //   .slice(1, 3)
  //   .map((data, index) => {
  //     const cate = data.kategoria
  //       .replace(/\s+/g, '_')
  //       .replace('ą', 'a')
  //       .replace('ć', 'c')
  //       .replace('ó', 'o')
  //       .replace(/[^\w\s]/gi, '')
  //       .toLowerCase();

  //     return (
  //       <Link
  //         to={`/blog/${cate}/${data.id}#navContainer`}
  //         key={index}
  //         className="blogArs"
  //         id={`helRes${index}`}
  //       >
  //         <div className="blogArticle">
  //           <div className="blogArticleCategory">{data.kategoria}</div>
  //           <div className="blogArticleHeader">{data.nazwa}</div>
  //           <div className="blogArticleContent">
  //             {shorten(data.tekst, 300)}
  //           </div>
  //           <div className="blogArticleDate">
  //             <FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
  //             <FontAwesomeIcon icon={faExternalLinkAlt} />
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   });

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
        <div id="blogGrid">blog</div>
        <div id="blogRes">blog2</div>
      </div>
    </section>
  );
}

export default Blog;
