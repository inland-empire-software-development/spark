import '../sass/index.scss';

import React, {useState, useEffect} from 'react';
import Login from '../components/global/Login';
import Auth from '../components/hoc/Auth/Auth';
import Link from 'next/link';

function Home() {

  return (
        <Link href="/login">
          <a>login</a>
        </Link>
  );
}

export default Home;
