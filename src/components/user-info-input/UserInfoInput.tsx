/* eslint-disable indent */
/* eslint-disable comma-dangle */
import React, {FormEvent} from 'react';
import './UserInfoInput.scss';
import {Message} from '../../..';

const handleUserInformation = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // prevents form from reloading page (form submission)

  // example of how to get user input from form.
  // const username: HTMLSelectElement | null = document.querySelector(
  //   '[name="login-username"]'
  // );
  const firstname: HTMLSelectElement | null = document.querySelector(
    '[name="user-firstname"]'
  );
  const lastname: HTMLSelectElement | null = document.querySelector(
    '[name="user-lastname"]'
  );
  const title: HTMLSelectElement | null = document.querySelector(
    '[name="user-title]'
  );
  const phone: HTMLSelectElement | null = document.querySelector(
    '[name="user-phone"]'
  );

  // this gets the global spinner.
  const spinner: HTMLElement | null = document.getElementById('spinner');

  // show spinner while working
  if (spinner) spinner.classList.remove('uk-hidden');

  // example API route that will handle signing in
  // Call api/user/personal
  const url = 'api/user/personal';

  // all data you want to pass over to API, name it appropriately
  const data = {
    firstname: firstname ? firstname.value : null,
    lastname: lastname ? lastname.value : null,
    title: title ? title.value : null,
    phone: phone ? phone.value : null
  };

  fetch(process.env.HOST + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response: { json: () => any }) => response.json())
    .then((response: Message) => {
      const {status, message} = response;

      console.log(status, message); // log to console to see what it prints.

      // if spinner is showing and you're done with saving stuff
      // now hide the spinner
      if (spinner) spinner.classList.add('uk-hidden');

      // do whatever else you need to do
    });
};

function UserInfoInput(): JSX.Element {
  return (
    <form onSubmit={(event) => handleUserInformation(event)}>
      <div className='uk-fieldset'>
        <legend className='uk-legend'>Personal Details</legend>
        <hr />
        <div className='uk-grid'>
          <div className='uk-width-1-5@m uk-margin-bottom profile-pic-container'>
            <div className='js-upload uk-placeholder uk-width-medium img-upload-container'>
              <img
                data-src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                alt='Placeholder Image'
                uk-img=''
              />
              <div className='uk-width-expand uk-child-width-expand uk-form-custom'>
                <input type='file' />
                <button className='uk-button uiif-button'>Browse</button>
              </div>
            </div>
          </div>

          <div className='uk-width-expand@m uk-grid uk-margin-remove uk-padding-remove uk-child-width-1-2@s'>
            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='first name'>
                First Name
              </label>
              <input
                className='uk-input'
                id=''
                type='text'
                placeholder='Lloan'
                name='user-firstname'
              ></input>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='last name'>
                Last Name
              </label>
              <input
                className='uk-input'
                id=''
                type='text'
                placeholder='Alas'
                name='user-lastname'
              ></input>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='title'>
                Title
              </label>
              <input
                className='uk-input'
                id=''
                type='text'
                placeholder='Student'
                name='user-title'
              ></input>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='phone number'>
                Phone No.
              </label>
              <input
                className='uk-input'
                id=''
                type='tel'
                placeholder='xxx-xxx-xxxx'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                name='user-phone'
              ></input>
            </div>
          </div>
        </div>

        <div className='uk-margin-bottom'>
          <label className='uk-form-label' htmlFor='personal information'>
            Personal Info
          </label>
          <textarea
            className='uk-textarea uiif-textarea-width'
            id='form-h-textarea'
            rows={5}
            placeholder='Something interesting about you!'
            name='user-about'
          ></textarea>
        </div>
      </div>

      <fieldset className='uk-fieldset'>
        <legend className='uk-legend'>Change Password</legend>
        <hr />

        <div className='uk-grid uk-child-width-1-2@s'>
          <div>
            <label className='uk-form-label' htmlFor='current password'>
              Current Password
            </label>
            <input
              className='uk-input uk-margin-bottom'
              id=''
              type='password'
              placeholder=''
            ></input>

            <label className='uk-form-label' htmlFor='new password'>
              New Password
            </label>
            <input
              className='uk-input uk-margin-bottom'
              id=''
              type='password'
              placeholder=''
            ></input>

            <label className='uk-form-label' htmlFor='confirm password'>
              Confirm Password
            </label>
            <input
              className='uk-input uk-margin-bottom'
              id=''
              type='password'
              placeholder=''
            ></input>
          </div>
        </div>
      </fieldset>

      <fieldset className='uk-fieldset'>
        <legend className='uk-legend'>Social Links</legend>
        <hr />

        <div className='uk-grid uk-child-width-1-2@s'>
          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='facebook'>
              Facebook
            </label>
            <input className='uk-input' id='' type='url' placeholder=''></input>
          </div>

          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='twitter'>
              Twitter
            </label>
            <input className='uk-input' id='' type='url' placeholder=''></input>
          </div>
        </div>

        <div className='uk-grid uk-child-width-1-2@s uk-margin-remove-top'>
          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='linkedin'>
              LinkedIn
            </label>
            <input className='uk-input' id='' type='url' placeholder=''></input>
          </div>

          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='Instagram'>
              Instagram
            </label>
            <input className='uk-input' id='' type='url' placeholder=''></input>
          </div>
        </div>
      </fieldset>

      <button className='uk-button uiif-button'>
        Save
        <i className='fas fa-long-arrow-alt-right arrow-icon'></i>
      </button>
    </form>
  );
}

export default UserInfoInput;
