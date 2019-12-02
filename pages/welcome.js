import '../sass/index.scss';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

function Welcome(){
  return(
      <div id="welcome" className="uk-container">
        <div className="uk-grid uk-flex-middle">
          <div>
            <h1 className="primary">Thank You</h1>
            <p className="uk-text-bolder">Welcome to the Spark learning portal.</p>
            <p className="subtitle-text">
              You will be receiving an email shortly.
            </p>
            <p>
              Confirm that you received the email and then try logging in to
              your account.
            </p>
            <Link href="/auth">
              <a>
                Go to Log In page
              </a>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Welcome;
