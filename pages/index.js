import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import {auth} from '../utils/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();

    const url = '/api/signin';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers:
            { 'cache-control': 'no-cache',
              Connection: 'keep-alive',
              'content-length': '33',
              'accept-encoding': 'gzip, deflate',
              'Cache-Control': 'no-cache',
              Accept: '*/*',
              'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password})
      });

      if (response.status === 200) {
        const {token, expiry} = await response.json();

        const auth = auth({
          token,
          expiry: 300 * 1000
        });

        if (auth){
          cookie.set('auth-token', token, {expiry});
        }

      } else {
        console.log('wtf man');
      }

    } catch (error) {
      console.error(
          'You have an error in your code or there are Network issues.',
          error,
      );

      const {response} = error;
      setUserData(
          Object.assign({}, userData, {
            error: response ? response.statusText : error.message,
          }),
      );
    }
  }

  return (
      <div>
        <div className='login'>
          <form onSubmit={handleSubmit}>

            <label>username
              <input
                  type='text'
                  id='username'
                  name='username'
                  value={username}
                  onChange={event =>
                      setUsername(event.target.value)
                  }
              />
            </label>

            <label>password
              <input
                  type='text'
                  id='password'
                  name='password'
                  value={password}
                  onChange={event =>
                      setPassword(event.target.value)
                  }
              />
            </label>

            <button type='submit'>Login</button>

            {userData.error && <p className='error'>Error: {userData.error}</p>}
          </form>
        </div>
      </div>
  );
}

export default Login;
