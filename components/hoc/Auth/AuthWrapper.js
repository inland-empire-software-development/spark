import React, {useState, useEffect} from 'react';
import auth from '../../../lib/auth';
import fetch from 'isomorphic-unfetch';

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
      }).then(response => response.json()).then(response => setAccess(response));
    }
  }, []);

  return (access &&
      <div>
        <WrappedComponent {...props}>
          {props.children}
        </WrappedComponent>
      </div>
  );
};

export default AuthWrapper;
