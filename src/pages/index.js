import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/Layout';
import Index from '../components/index/index';
import OMnie from '../components/pg/PoMnie';
import Metamorfozy from '../components/pg/Pmetamorfozy';
import Wspolpraca from '../components/pg/Pwspolpraca';
import Pblog from '../components/pg/Pblog';

export default function index() {
  return (
    <Layout>
      <Router>
        <Index path="/" />
        <OMnie path="oMnie" />
        <Wspolpraca path="wspolpraca" />
        <Metamorfozy path="metamorfozy" />
        <Pblog path="blog" />
      </Router>
    </Layout>
  );
}
