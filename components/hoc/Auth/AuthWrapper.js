import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import auth from '../../../lib/auth';
import fetch from 'isomorphic-unfetch';
import Spinner from '../../global/Spinner';

const AuthWrapper = (WrappedComponent) => (props) => {
  const {children} = props;
  const [access, setAccess] = useState(false);

  useEffect(() => {
    // API route that will handle signing in
    const url = '/api/auth';
    const {token, user} = auth.getInfo();

    if (token && user) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user, token}),
      })
      .then(response => response.json())
      .then(response => {
        setAccess(response.access);
        console.log(response);
      });
    }
  }, []);

  const renderContent = (props) => {
    const {reverse = false} = props;
    const content = (
        <div>
          <WrappedComponent {...props}>
            {children}
          </WrappedComponent>
        </div>
    );

    console.log(reverse, access);

    if (access && !reverse) {
      return content;
    } else if (access && reverse) {
      console.log('redirect');
      return ('');
    } else {
      return (
          <Spinner hidden={false}/>
      );
    }
  };

  return (renderContent(props));
};

export default AuthWrapper;
