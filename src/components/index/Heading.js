import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import smoothscroll from 'smoothscroll-polyfill';

import Logo from '../../assets/img/LogoV1';

const Heading = () => {
  const [containerName, setContainerName] = useState('container');
  const [hasRan, setHasRan] = useState(false);
  const [screenSize, setScreenSize] = useState({
    height: 0,
    width: 0,
  });

  const updateScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    if (!hasRan) {
      setHasRan(true);
      updateScreenSize();
    }
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [screenSize]);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const clicked = () => {
    if (containerName === 'container') {
      setContainerName('container change');

      const items = document.querySelectorAll('.b');
      items.forEach((userItem) => {
        userItem.style.display = 'grid';
      });

      document.querySelector('#headContact').style.display = 'grid';
    } else {
      setContainerName('container');

      const items = document.querySelectorAll('.b');
      items.forEach((userItem) => {
        userItem.style.display = 'none';
      });

      document.querySelector('#headContact').style.display = 'none';
    }
  };

  const navToFooter = () => {
    document
      .querySelector('#footerBackground')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <Logo data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" />
      <div id="navContainer">
        <div
          id="telephone"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          zadzwoń:
          <a id="number" href="tel:+48-503-577-932">
            {' '}
            +48 503 577 932
          </a>
        </div>
        <nav
          id="topNav"
          className="topNavigation"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <span id="menuText">MENU</span>
          <div
            className={containerName}
            onClick={clicked}
            role="link"
            tabIndex={0}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <Link
            className="b"
            to={screenSize.width > 680 ? '/' : '/#headerImgContainer'}
            activeStyle={{
              background: '#4831d4',
              color: '#ccf381',
            }}
          >
            <div className="a">strona główna</div>
          </Link>
          <Link
            to={screenSize.width > 680 ? '/o-mnie' : '/o-mnie#PMHeader'}
            className="b"
            activeStyle={{
              background: '#4831d4',
              color: '#ccf381',
            }}
          >
            <div className="a">o mnie</div>
          </Link>
          <Link
            to={screenSize.width > 680 ? '/blog' : '/blog#PMBlog'}
            className="b"
            activeStyle={{
              background: '#4831d4',
              color: '#ccf381',
            }}
          >
            <div className="a">blog</div>
          </Link>
          <Link
            to={screenSize.width > 680 ? '/metamorfozy' : '/metamorfozy#PMMeta'}
            className="b"
            activeStyle={{
              background: '#4831d4',
              color: '#ccf381',
            }}
          >
            <div className="a">metamorfozy</div>
          </Link>
          <Link
            to={screenSize.width > 680 ? '/wspolpraca' : '/wspolpraca#PMWspol'}
            className="b"
            activeStyle={{
              background: '#4831d4',
              color: '#ccf381',
            }}
          >
            <div className="a">współpraca</div>
          </Link>
          <div
            onClick={navToFooter}
            className="a"
            id="headContact"
            role="link"
            tabIndex={0}
          >
            kontakt
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Heading;
