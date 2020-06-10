import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

function PblogNavigation() {
  const shorten = (str, maxLen, separator = ' ') => {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
  };

  return (
    <>
      {/* {articles
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((data, index) => {
          let docLoc = document.location.pathname;
          let cate = data.kategoria
            .replace(/\s+/g, '_')
            .replace('ą', 'a')
            .replace('ć', 'c')
            .replace('ó', 'o')
            .replace(/[^\w\s]/gi, '')
            .toLowerCase();

          if (docLoc === '/blog') {
            return (
              <a
                href={`/blog/${cate}/${data.id}`}
                className="PblogArticle"
                key={index}
              >
                <div className="PblogCategory">{data.kategoria}</div>
                <div className="PblogHeader">{data.nazwa}</div>
                <img
                  src={require(`../content/articleImages/${data.obraz}`)}
                  alt="articleP"
                  className="PblogImg"
                />
                <div className="PblogText">{this.shorten(data.tekst, 400)}</div>
                <div className="PblogDateCont">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </a>
            );
          } else if (cate === docLoc.substring(docLoc.indexOf('/') + 6)) {
            return (
              <a
                href={`/blog/${cate}/${data.id}`}
                className="PblogArticle"
                key={index}
              >
                <div className="PblogCategory">{data.kategoria}</div>
                <div className="PblogHeader">{data.nazwa}</div>
                <img
                  src={require(`../content/articleImages/${data.obraz}`)}
                  alt="articleP"
                  className="PblogImg"
                />
                <div className="PblogText">{this.shorten(data.tekst, 400)}</div>
                <div className="PblogDateCont">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </a>
            );
          } else {
            return '';
          }
        })} */}
    </>
  );
}

export default PblogNavigation;
