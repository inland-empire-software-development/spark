import React, {useState} from 'react';

function Signup() {
  const handleSignUp = e => {
    e.preventDefault();

    // get all required variables to submit new user request
    const username = document.querySelector('[name="signup-username"]').value;
    const email = document.querySelector('[name="signup-email"]').value;
    const password = document.querySelector('[name="signup-password"]').value;

    // API route that will handle signing in
    const url = "/api/signup";

    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, email, password, role: 'subscriber'})
      })
      .then(response => response.json())
      .then(response => {
        if (response.serverStatus && response.serverStatus === 2) {
          if (document) {
            document.location.href = "/"; // TODO: redirect to success screen
          }
        } else {
          console.log('failure!'); // TODO: let user know how they failed, try again? redirect?
        }
      }).catch(error => console.log(error))

    }
    catch (error) {
      console.error(
          "You have an error in your code or there are Network issues.",
          error,
      );
    }
  };

  const checkVisibilityToggle = (index, state) => {
    const requirement = document.querySelector(`[data-check="${index}"]`);

    state ? requirement.classList.remove('uk-hidden') : requirement.classList.add('uk-hidden');
  };

  const checkPasswordRequirements = password => {
    const check = {
      number: /\d/.test(password),
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      length: password.length >= 10,
    };

    for (const requirement in check) {
      checkVisibilityToggle(requirement, check[requirement]);
    }
  };

  const handlePassword = e => {
    const password = document.querySelector('[name="signup-password"]');
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;

    // check off the requirements that are met
    checkPasswordRequirements(password.value);

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

  const handlePasswordConfirmation = e => {

    const password = document.querySelector('[name="signup-password"]');
    const passwordConfirmation = document.querySelector('[name="signup-password-confirm"]');

    if (password.value === passwordConfirmation.value) {
      passwordConfirmation.setCustomValidity('');
    } else {
      passwordConfirmation.setCustomValidity('Passwords don\'t match');
    }

  };

  return (
      <section className="auth-signup">
        <p className="uk-text-center">Sign up today. It's free!</p>
        <form onSubmit={e => handleSignUp(e)}>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user"/>
              <input className="uk-input uk-form-large" type="text" placeholder="username" name="signup-username"
                     required={true}/>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: mail"/>
              <input className="uk-input uk-form-large" type="email" placeholder="email" name="signup-email"
                     required={true}/>
            </div>
          </div>
          <div className="uk-margin password-requirements">
            <p><strong>Password Requirements</strong></p>
            <ul>
              <li>One number <span uk-icon="check" className="uk-hidden" data-check="number"/></li>
              <li>One lowercase character <span uk-icon="check" className="uk-hidden" data-check="lower"/></li>
              <li>One uppercase character <span uk-icon="check" className="uk-hidden" data-check="upper"/></li>
              <li>At least 10 characters <span uk-icon="check" className="uk-hidden" data-check="length"/></li>
            </ul>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock"/>
              <input className="uk-input uk-form-large" onChange={e => handlePassword(e)}
                     type="password" placeholder="password" name="signup-password" required={true} minLength={10}/>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock"/>
              <input className="uk-input uk-form-large" onChange={e => handlePasswordConfirmation(e)}
                     type="password" placeholder="confirm password" name="signup-password-confirm" required={true}/>
            </div>
          </div>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-checkbox" type="checkbox" name="signup-tos" required={true}/> I agree the Terms and Conditions.
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