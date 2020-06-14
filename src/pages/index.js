import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/Layout';
import Index from '../components/index/index';
import OMnie from '../components/pg/PoMnie';
import Metamorfozy from '../components/pg/Pmetamorfozy';
import Wspolpraca from './wspolpraca';
import Pblog from '../components/pg/Pblog';

export default function index() {
  return (
    <Layout>
      <Router>
        <Index path="/" />
        <OMnie path="o-mnie" />
        <Wspolpraca path="wspolpraca" />
        <Metamorfozy path="metamorfozy" />
        <Pblog path="blog" />
      </Router>
    </Layout>
  );
}
