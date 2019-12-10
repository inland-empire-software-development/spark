import fetch from 'isomorphic-unfetch';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    const username = document.querySelector('[name="login-username"]').value;
    const password = document.querySelector('[name="login-password"]').value;
    const spinner = document.getElementById('spinner');

    // show spinner while working
    spinner.classList.remove('uk-hidden');

    // API route that will handle signing in
    const url = '/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    }).then((response) => response.json()).then((response) => {
      const {state} = response;

      // hide spinner as work is essentially done
      spinner.classList.add('uk-hidden');

      if (state) {
        if (process.browser && UIkit) {
          document.location.href = "/dashboard";
        }
      } else {
        if (process.browser && UIkit) {
          UIkit.notification({
            message: `Incorrect login, please try again.`,
            status: 'danger',
            pos: 'top-left',
            timeout: 5000});
        }
      }
    });
  };

  return (
    <section className="auth-login">
      <p className="uk-text-center">Sign in to your account</p>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-user"/>
            <input className="uk-input uk-form-large" name="login-username" type="text" autoComplete="username"
              placeholder="username" required/>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-lock-alt"/>
            <input className="uk-input uk-form-large" name="login-password" type="password"
              autoComplete="current-password" placeholder="password" required/>
          </div>
        </div>
        <div className="uk-margin uk-text-right@s uk-text-center uk-text-small">
          <a href="#" uk-switcher-item="2">Forgot Password?</a>
        </div>
        <div className="uk-margin">
          <button className="uk-button bg-primary black uk-button-large uk-width-1-1">Login</button>
        </div>
        <div className="uk-text-small uk-text-center">
            Not registered? <a href="#" uk-switcher-item="1">Create an account</a>
        </div>
      </form>
    </section>
  );
}

export default Login;
