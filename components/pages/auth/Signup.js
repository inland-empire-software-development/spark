import React, {useState} from 'react';
import Message from '../../global/Message';

function Signup() {
  const [message, setMessage] = useState({state: false, message: ""});

  // headers template for api calls
  const headers = data => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  };

  // Handles the sign up process
  const handleSignUp = e => {
    e.preventDefault();

    // activate spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('uk-hidden');

    // get all required variables to submit new user request
    const username = document.querySelector('[name="signup-username"]').value;
    const email = document.querySelector('[name="signup-email"]').value;
    const password = document.querySelector('[name="signup-password"]').value;

    // API route that will handle signing in
    const url = '/api/signup';

    try {
      fetch(url, headers({username, email, password, role: 'subscriber'})).
          then(response => response.json()).
          then(response => {
            if (response.serverStatus && response.serverStatus === 2) {
              if (document) {
                document.location.href = '/welcome';
                setMessage({
                  state: false,
                  message: ""
                })
              }
            } else {
              spinner.classList.add('uk-hidden');   // TODO: let user know how they failed, try again? redirect?
              setMessage({
                state: true,
                message: "Error creating user, please contact an admin if it happens again."
              })
            }
          }).
          catch(error => console.log(error));

    } catch (error) {
      console.error(
          'You have an error in your code or there are Network issues.',
          error,
      );
    }
  };

  const handleUserCheck = e => {
    e.preventDefault();

    // get all required variables to submit new user request
    const user = document.querySelector('[name="signup-username"]');
    const username = user.value;
    const message = document.querySelector('[data-message="username"]');

    // API route that will handle signing in
    const url = `/api/user?secret=${process.env.SECRET}`;

    fetch(url, headers({username})).then(response => response.json()).then(response => {
      if (!response) {
        message.style.visibility = 'hidden';
        user.setCustomValidity('');
      } else {
        message.style.visibility = 'visible';
        user.setCustomValidity('Username already in use, try another.');
      }
    }).catch(error => console.log(error));
  };

  const handleEmailCheck = e => {
    e.preventDefault();

    // get all required variables to submit new user request
    const address = document.querySelector('[name="signup-email"]');
    const email = address.value;
    const message = document.querySelector('[data-message="email"]');

    // API route that will handle signing in
    const url = `/api/email?secret=${process.env.SECRET}`;

    fetch(url, headers({email})).then(response => response.json()).then(response => {
      if (!response) {
        message.style.visibility = 'hidden';
        address.setCustomValidity('');
      } else {
        message.style.visibility = 'visible';
        address.setCustomValidity('Email already in use, try another.');
      }
    }).catch(error => console.log(error));
  };

  // Handles the visibility of the check marks for each requirement
  const handleVisibilityToggle = (index, state) => {
    const requirement = document.querySelector(`[data-check="${index}"]`);

    state ? requirement.classList.remove('uk-hidden') : requirement.classList.add('uk-hidden');
  };

  // Handles the testing of individual requirements
  const handleRequirements = password => {
    const check = {
      number: /\d/.test(password),
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      length: password.length >= 10,
    };

    for (const requirement in check) {
      handleVisibilityToggle(requirement, check[requirement]);
    }
  };

  // Handles password validation as a whole
  const handlePassword = e => {
    const password = document.querySelector('[name="signup-password"]');
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;

    // check off the requirements that are met
    handleRequirements(password.value);

    // if pattern is matched
    if (pattern.test(password.value)) {
      // let user know password is valid
      password.classList.add('password-valid');
      password.setCustomValidity('');
    } else {
      // remove styling if password is not valid
      password.classList.remove('password-valid');
      password.setCustomValidity('Password does not meet minimum requirements');
    }

  };

  // Allows user to toggle password view
  const showPassword = e => {
    e.preventDefault();

    const password = document.querySelector('[name="signup-password"]');
    const showPassword = document.querySelector('.show-password');
    const type = password.getAttribute('type');

    if (type === 'password') {
      password.setAttribute('type', 'text');
      showPassword.innerHTML = 'hide password';
    } else {
      password.setAttribute('type', 'password');
      showPassword.innerHTML = 'show password';
    }

  };

  return (
      <section className="auth-signup">
        <Message message={message.message} hidden={message.state}/>
        <p className="uk-text-center">Sign up today. It's free!</p>
        <form onSubmit={e => handleSignUp(e)}>
          <div className="uk-margin uk-margin-remove-bottom">
            <div className="uk-inline uk-width-1-1">
              <i className="uk-form-icon fal fa-user"/>
              <input className="uk-input uk-form-large" type="text" autoComplete="user" placeholder="username" name="signup-username"
                     required={true}
                     onBlur={e => handleUserCheck(e)}
              />
            </div>
            <small className="user-message" data-message="username">
              <i className="uk-form-icon fal fa-exclamation-triangle"/>
              Name already in use, try another.
            </small>
          </div>
          <div className="uk-margin uk-margin-remove-bottom uk-margin-remove-top">
            <div className="uk-inline uk-width-1-1">
              <i className="uk-form-icon fal fa-envelope"/>
              <input className="uk-input uk-form-large" type="email" autoComplete="email" placeholder="email" name="signup-email"
                     required={true}
                     onBlur={e => handleEmailCheck(e)}
              />
            </div>
            <small className="user-message" data-message="email">
              <i className="uk-form-icon fal fa-exclamation-triangle"/>
              Email already in use, try another.
            </small>
          </div>
          <div className="uk-margin password-requirements uk-margin-remove-top">
            <p className="uk-margin-remove-bottom"><strong>Password Requirements</strong></p>
            <ul className="uk-margin-remove-bottom">
              <li>At least one numeric character <i className="uk-hidden fal fa-check" data-check="number"/></li>
              <li>At least one lowercase character <i className="uk-hidden fal fa-check" data-check="lower"/></li>
              <li>At least one uppercase character <i className="uk-hidden fal fa-check" data-check="upper"/></li>
              <li>At least 10 characters in length <i className="uk-hidden fal fa-check" data-check="length"/></li>
            </ul>
            <a href="#" className="show-password uk-align-right" onClick={e => showPassword(e)}>show password</a>

            <div className="uk-inline uk-width-1-1">
              <i className="uk-form-icon fal fa-lock-alt"/>
              <input className="uk-input uk-form-large" onChange={e => handlePassword(e)}
                     type="password" placeholder="password" name="signup-password" autoComplete="current-password" required={true} minLength={10}/>
            </div>

          </div>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-checkbox" type="checkbox" name="signup-tos" required={true}/> I agree the Terms and
              Conditions.
            </label>
          </div>
          <div className="uk-margin">
            <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Create Account</button>
          </div>
          <div className="uk-text-small uk-text-center">
            Already have an account? <a href="#" uk-switcher-item="0">Log in</a>
          </div>
        </form>
      </section>
  );
}

export default Signup;
