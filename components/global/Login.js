import  React, {useEffect, useState} from 'react';
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";
import {authorize} from '../../lib/authorize';

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin (event) {
    event.preventDefault();

    // API route that will handle signing in
    const url = "/api/authenticate";


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      });

      if (response.status === 200) {
        const {token, expiry} = await response.json();
        console.log(token, expiry);

        const authenticate = authorize({
          token,
          expiry: 300 * 1000
        });

        if (authenticate) {
          console.log("authentication successful!");
        } else {
          console.log("user should sign up")
        }
      }

    }
    catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error,
      );

      const {response} = error;
      setErrorMessage(response ? response.statusText : error.message);
    }
  }

  return (
    <div id='login'>
      Login
      <form onSubmit={handleLogin}>

        <label>username
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>

        <label>password
          <input
            type='text'
            id='password'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>

        <button type='submit'>Login</button>

        {errorMessage && <p className='error'>Error: {errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login;
