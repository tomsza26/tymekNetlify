import React from 'react';
import { Link } from 'gatsby';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import PblogNavigation from './PblogNavigation';

function Pblog() {
  return (
    <div className="PCont" id="PMBlog">
      <Helmet title="Blog - Pakuj z Tymkiem" />
      <div className="PInner" id="Pblog">
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
            to="/blog/jak_zaczac"
            className="PBlogButton"
            activeStyle={{
              background: '#ccf381',
              color: '#4831d4',
            }}
          >
            JAK ZACZĄĆ?
          </Link>
          <Link
            to="/blog/rozwoj_osobisty"
            className="PBlogButton"
            activeStyle={{
              background: '#ccf381',
              color: '#4831d4',
            }}
          >
            ROZWÓJ OSOBISTY
          </Link>
          <Link
            to="/blog/plany_treningowe"
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

        {/* <Router>
          <div className="PblogArticlesCont">
              <Route path="/blog" component={PblogNavigation} />
              <Route path="/blog/dieta" component={PblogNavigation} />
              <Route path="/blog/trening" component={PblogNavigation} />
              <Route path="/blog/ciekawostki" component={PblogNavigation} />
              <Route path="/blog/jak_zaczac" component={PblogNavigation} />
              <Route path="/blog/rozwoj_osobisty" component={PblogNavigation} />
              <Route
                path="/blog/plany_treningowe"
                component={PblogNavigation}
              />
          </div>
        </Router> */}
      </div>
    </div>
  );
}

export default Pblog;
