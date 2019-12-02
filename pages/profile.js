import React, {useState, useEffect} from 'react';
import Auth from '../components/hoc/Auth/Auth';
import '../sass/index.scss';

function Profile() {

  return (
      <Auth>
        <main>
          Logged in
        </main>
      </Auth>
  );
}

export default Profile;
