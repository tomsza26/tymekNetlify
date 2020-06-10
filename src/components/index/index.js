import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderPhoto from './HeaderPhoto';
import Blog from './Blog';
import Metam from './Metam';
import AboutMe from './AboutMe';

const index = () => (
  <>
    <Helmet title="Strona Główna - Pakuj z Tymkiem" />
    <HeaderPhoto />
    <Blog />
    <Metam />
    <AboutMe />
  </>
);

export default index;
