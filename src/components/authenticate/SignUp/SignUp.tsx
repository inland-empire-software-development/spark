import React, {useState, FormEvent} from 'react';
import './SignUp.scss';
import Message from '../../global/Message/Message';
import Password from '../Password/Password';
/**
 * Renders the SignUp component
 * @constructor
 */
function SignUp(): JSX.Element {
  const [message, setMessage] = useState({status: false, message: ''});

  // toggles visibility of an element
  const handleToggle = (element: any | null, find: string, action: string) => {
    if (element) {
      if (action === 'add' && !element.classList.contains(find)) {
        element.classList.add(find);
      } else if (action === 'remove') {
        element.classList.remove(find);
      }
    }
  };

  // headers template for api calls
  const headers = (data: object) => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  };

  // Handles the sign up process
  const handleSignUp = () => {
    if ((process as any).browser && document) {
      const spinner: HTMLElement | null = document.getElementById('spinner');

      if (spinner) spinner.classList.remove('uk-hidden');

      // get all required variables to submit new user request
      const username: HTMLInputElement | null = document.querySelector('[name="signup-username"]');
      const email: HTMLInputElement | null = document.querySelector('[name="signup-email"]');
      const password: HTMLInputElement | null = document.querySelector('[name="password-component"]');

      // API route that will handle signing in
      const url = 'api/authenticate/signup';

      if (username && email && password) {
        const data: object = {
          username: username.value,
          email: email.value,
        };

        fetch(process.env.HOST + url, headers(Object.assign(data, {
          password: password.value,
          role: "subscriber",
        })))
            .then((response) => response.json())
            .then((response) => {
              if (response.serverStatus && response.serverStatus === 2) {
                fetch('/api/mail', headers(Object.assign(data, {
                  action: 'confirm',
                  data: {
                    token: response.token,
                  },
                })))
                    .then((response) => response.json())
                    .then((response) => {
                      if (response && response.status) {
                        document.location.href = `/welcome?user=${username.value}`;
                        setMessage({
                          status: false,
                          message: '',
                        });
                      } else {
                        if (spinner) spinner.classList.add('uk-hidden');
                        setMessage({
                          status: true,
                          message: 'Error sending confirmation email, please contact an admin.',
                        });
                      }
                    });
              } else {
                if (spinner) spinner.classList.add('uk-hidden');
                setMessage({
                  status: true,
                  message: 'Error creating user, please contact an admin if it happens again.',
                });
              }
            }).
            catch((error) => console.log(error));
      }
    }
  };

  const handleUserCheck = (event: FormEvent) => {
    event.preventDefault();

    // get all required variables to submit new user request
    const user: HTMLSelectElement | null = document.querySelector('[name="signup-username"]');
    const spinner: ChildNode | null = user ? user.nextSibling : null;
    const check: ChildNode | null = spinner ? spinner.nextSibling : null;
    const username: string | null = user ? user.value : null;
    const message: HTMLElement | null = document.querySelector('[data-message="username"]');

    handleToggle(spinner, 'uk-hidden', 'remove');
    handleToggle(check, 'uk-hidden', 'add');

    // API route that will handle signing in
    const url = `api/validate/user`;

    fetch(process.env.HOST + url, headers({username}))
        .then((response) => response.json())
        .then((response) => {
          handleToggle(spinner, 'uk-hidden', 'add');

          if (user && message && username) {
            if (!response && username.length !== 0) {
              message.style.visibility = 'hidden';
              user.setCustomValidity('');
              handleToggle(check, 'uk-hidden', 'remove');
            } else {
              message.style.visibility = 'visible';
              user.setCustomValidity('Username already in use, try another.');
              handleToggle(check, 'uk-hidden', 'add');
            }
          }
        })
        .catch((error) => console.log(error));
  };

  const handleEmailCheck = (event: FormEvent) => {
    event.preventDefault();

    // get all required variables to submit new user request
    const address: HTMLSelectElement | null = document.querySelector('[name="signup-email"]');
    const email: string | null = address ? address.value : null;
    const spinner: ChildNode | null = address ? address.nextSibling : null;
    const check: ChildNode | null = spinner ? spinner.nextSibling : null;
    const message: HTMLElement | null = document.querySelector('[data-message="email"]');

    handleToggle(spinner, 'uk-hidden', 'remove');
    handleToggle(check, 'uk-hidden', 'add');

    // API route that will handle signing in
    const url = `api/validate/email`;

    fetch(process.env.HOST + url, headers({email}))
        .then((response) => response.json())
        .then((response) => {
          handleToggle(spinner, 'uk-hidden', 'add');

          if (message && address && email) {
            if (!response && email.length !== 0) {
              message.style.visibility = 'hidden';
              address.setCustomValidity('');
              handleToggle(check, 'uk-hidden', 'remove');
            } else {
              message.style.visibility = 'visible';
              address.setCustomValidity('Email already in use, try another.');
              handleToggle(check, 'uk-hidden', 'add');
            }
          }
        })
        .catch((error) => console.log(error));
  };

  return (
    <section className="auth-signup">
      <Message message={message.message} hidden={!message.status} priority={0}/>
      <p className="uk-text-center">Sign up today. It&apos;s free!</p>
      <form id="signUp-form" onSubmit={(event) => {
        event.preventDefault();
        handleSignUp();
      }}>
        <div className="uk-margin uk-margin-remove-bottom">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-user"/>
            <input
              className="uk-input uk-form-large"
              type="text"
              autoComplete="user"
              placeholder="username"
              name="signup-username"
              required={true}
              onBlur={(e) => handleUserCheck(e)}
            />
            <div className="input-spinner uk-hidden" uk-spinner="true"/>
            <i className="fal fa-check signup-check uk-hidden"/>
          </div>
          <small className="user-message" data-message="username">
            <i className="uk-form-icon fal fa-exclamation-triangle"/>
              Name already in use, try another.
          </small>
        </div>
        <div className="uk-margin uk-margin-remove-bottom uk-margin-remove-top">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-envelope"/>
            <input
              className="uk-input uk-form-large"
              type="email"
              autoComplete="email"
              placeholder="email"
              name="signup-email"
              required={true}
              onBlur={(e) => handleEmailCheck(e)}
            />
            <div className="input-spinner uk-hidden" uk-spinner="true"/>
            <i className="fal fa-check signup-check uk-hidden"/>

          </div>
          <small className="user-message" data-message="email">
            <i className="uk-form-icon fal fa-exclamation-triangle"/>
              Email already in use, try another.
          </small>
        </div>
        <Password/>
        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input className="uk-checkbox" type="checkbox" name="signup-tos" required={true}/> I agree the Terms and
              Conditions.
          </label>
        </div>
        <div className="uk-margin">
          <button className="uk-button w-100" type="submit">Create Account</button>
        </div>
        <div className="uk-text-small uk-text-center">
            Already have an account? <a href="#" uk-switcher-item="0">Log in</a>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
