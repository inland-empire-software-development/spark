import  React, {useEffect, useState} from 'react';
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin (event) {
    event.preventDefault();

    // API route that will handle signing in
    const url = "/api/login";

    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      })
      .then(response => response.json())
      .then(response => {
        const {token} = response;

        if (token) {
          cookie.set('auth-token', response.token, {expires: 7});
          cookie.set('auth-token-user', username, {expires: 7});
          // TODO: redirect to profile page
        }

      })

      // if (response.status === 200) {
      //   const {token, expiry} = await response.json();
      //   console.log(token, expiry);
      //
      //   const authenticate = authorize({
      //     token,
      //     expiry: 300 * 1000
      //   });
      //
      //   if (authenticate) {
      //     console.log("authentication successful!");
      //   } else {
      //     console.log("user should sign up")
      //   }
      // }

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
            required={true}
          />
        </label>

        <label>password
          <input
            type='text'
            id='password'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            required={true}
          />
        </label>

        <button type='submit'>Login</button>

        {errorMessage && <p className='error'>Error: {errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login;
