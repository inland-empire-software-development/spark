import React, {useState, useEffect} from 'react';
import Login from '../components/global/Login';
import Auth from '../components/hoc/Auth/Auth';

function Home() {

  return (
        <Auth>
          <main>
            <Login/>
          </main>
        </Auth>
  );
}

export default Home;
