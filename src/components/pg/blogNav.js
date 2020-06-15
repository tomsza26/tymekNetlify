import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const blogNav = () => (
  <>
    <div
      className="PHeader"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
      id="PblogHeaderAr"
    >
      BLOG
    </div>
    <div id="PblogButtonsCont">
      <Link
        to="/blog/dieta"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        DIETA
      </Link>
      <Link
        to="/blog/trening"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        TRENING
      </Link>
      <Link
        to="/blog/ciekawostki"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        CIEKAWOSTKI
      </Link>
      <Link
        to="/blog/jak-zaczac"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        JAK ZACZĄĆ?
      </Link>
      <Link
        to="/blog/rozwoj-osobisty"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        ROZWÓJ OSOBISTY
      </Link>
      <Link
        to="/blog/plany-treningowe"
        className="PBlogButton"
        activeStyle={{
          background: '#ccf381',
          color: '#4831d4',
        }}
      >
        PLANY TRENINGOWE
      </Link>
      <Link to="/blog" className="PBlogButton" id="PBlogRed">
        <FontAwesomeIcon icon={faRedoAlt} />
      </Link>
    </div>
  </>
);

export default blogNav;
