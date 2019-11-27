import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import auth from '../../../lib/auth';
import fetch from 'isomorphic-unfetch';

const AuthWrapper = (WrappedComponent) => (props) => {
  const {children, url} = props;
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
      }).then(response => response.json()).then(response => setAccess(response));
    }
  }, []);

  const renderContent = (props) => {
    if (access) {
      return(
          <div>
            <WrappedComponent {...props}>
              {props.children}
            </WrappedComponent>
          </div>
      )
    } else {
      return ("No Access")
    }
  };

  return(renderContent(props))
};

export default AuthWrapper;
