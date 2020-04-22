import React from 'react';
import './Password.scss';
interface PasswordCheck {
  [property: string]: boolean;
}

// Handles the visibility of the check marks for each requirement
const handleVisibilityToggle = (index: string, state: boolean) => {
  const requirement = document.querySelector(`[data-check="${index}"]`);

  if (requirement) {
    state
      ? requirement.classList.remove('uk-hidden')
      : requirement.classList.add('uk-hidden');
  }
};

// Handles the testing of individual requirements
const handleRequirements = (password: string) => {
  const check: PasswordCheck = {
    number: /\d/.test(password),
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    length: password.length >= 10,
  };

  for (const requirement in check) {
    if (check.hasOwnProperty(requirement)) {
      const result = check[requirement];
      handleVisibilityToggle(requirement, result);
    }
  }
};

// Allows user to toggle password view
const showPassword = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();

  const password = document.querySelector('[name="password-component"]');
  const showPassword = document.querySelector('.show-password');
  const type: string | null = password ? password.getAttribute('type') : null;

  if (password && showPassword) {
    if (type === 'password') {
      password.setAttribute('type', 'text');
      showPassword.innerHTML = 'hide password';
    } else {
      password.setAttribute('type', 'password');
      showPassword.innerHTML = 'show password';
    }
  }
};

// Handles password validation as a whole
const handlePassword = (
  event: React.ChangeEvent<HTMLInputElement>,
  passwordRequired: boolean = true
) => {
  if (passwordRequired) {
    const password: HTMLInputElement = event.target;
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
  }
};

function Password(props?: any): JSX.Element {
  return (
    <div
      id='password-component'
      className='uk-margin password-requirements uk-margin-remove-top'
    >
      <p className='uk-margin-remove-bottom'>
        <strong>Password Requirements</strong>
      </p>
      <ul className='uk-margin-remove-bottom'>
        <li>
          At least one numeric character{' '}
          <i className='uk-hidden fal fa-check green' data-check='number' />
        </li>
        <li>
          At least one lowercase character{' '}
          <i className='uk-hidden fal fa-check green' data-check='lower' />
        </li>
        <li>
          At least one uppercase character{' '}
          <i className='uk-hidden fal fa-check green' data-check='upper' />
        </li>
        <li>
          At least 10 characters in length{' '}
          <i className='uk-hidden fal fa-check green' data-check='length' />
        </li>
      </ul>
      <a
        href='#'
        className='show-password uk-align-right uk-text-right'
        onClick={(event) => showPassword(event)}
      >
        show password
      </a>

      <label id='password-label'>
        <span>{props.label}</span>
      </label>
      <div className='uk-width-1-1'>
        <i className='uk-form-icon fal fa-lock-alt' />
        <input
          className='uk-input uk-form-large'
          onChange={(event) => handlePassword(event, props.required)}
          type='password'
          placeholder='password'
          name='password-component'
          autoComplete={props.autocomplete || 'current-password'}
          required={
            typeof props.required !== 'undefined' ? props.required : true
          }
          minLength={10}
        />
      </div>
    </div>
  );
}

export default Password;
