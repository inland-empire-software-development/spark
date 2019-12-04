function SignUp(){
  return (
    <div id='signup'>
      Sign up
      <form onSubmit={handleSignUp}>

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

export default SignUp;
