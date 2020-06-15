import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderPhoto from './HeaderPhoto';
import Blog from './Blog';
import Metam from './Metam';
import AboutMe from './AboutMe';

const index = (props) => {
  const { threeArticles, twoPeople } = props;
  return (
    <>
      <Helmet title="Strona Główna - Pakuj z Tymkiem" />
      <HeaderPhoto />
      <Blog threeArticles={threeArticles} />
      <Metam twoPeople={twoPeople} />
      <AboutMe />
    </>
  );
};

export default index;
