import {useEffect} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

// this will check and authorize
export const authorize = ({token, expiry}) => {

  // check if there is a token

  // if there is no token - it means the user is not logged in.

    // attempt to validate username and password

      // if valid, create new token
        // save token to Redis + MySQL
        // set cookie

      // invalid
          // send message about invalid information


  // if there is a token
    // validate the token
      // handle if valid

      // handle if not valid
        // send message about invalid token

};
