/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
//  - new password validation stays after password is deleted
//  - add phone number verification -- need format guidelines
//  - profile picture file upload not implemented
//  - should user be logged out when password is updated
// V2
//  - Update placeholders with user's infomation
//  - autocomplete wants to put saved password in new password 
//    and username in number
// =======================================================================

import React, { useContext, FormEvent } from 'react';
import './UserInfoInput.scss';
import { Message } from '../../..';
import Password from '../authenticate/Password/Password';
import { Context } from '../../../src/context';

const UserInfoInput = () => {
  const { userID } = useContext(Context);

  const handleUserInformation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents form from reloading page (form submission)

    // const handleFileUpload = (selectorFiles: FileList | null) => {
    //   if (selectorFiles) {
    //     console.log(selectorFiles[0]);
    //   }
    // };
    //  onChange={(event) => handleFileUpload(event.target.files)}

    // getting user input from form.
    const profilepic: HTMLInputElement | null = document.querySelector(
      '[name="user-pic"]'
    );
    console.log('Profile Picture: ', profilepic);
    const firstname: HTMLInputElement | null = document.querySelector(
      '[name="user-firstname"]'
    );
    const lastname: HTMLInputElement | null = document.querySelector(
      '[name="user-lastname"]'
    );
    const title: HTMLSelectElement | null = document.querySelector(
      '[name="user-title"]'
    );
    const phone: HTMLInputElement | null = document.querySelector(
      '[name="user-phone"]'
    );
    const about: HTMLInputElement | null = document.querySelector(
      '[name="user-about"]'
    );
    const oldpassword: HTMLInputElement | null = document.querySelector(
      '[name="user-oldpassword"]'
    );
    const password: HTMLInputElement | null = document.querySelector(
      '[name="password-component"]'
    );
    const facebook: HTMLInputElement | null = document.querySelector(
      '[name="user-fb"]'
    );
    const twitter: HTMLInputElement | null = document.querySelector(
      '[name="user-twitter"]'
    );
    const linkedin: HTMLInputElement | null = document.querySelector(
      '[name="user-linkedin"]'
    );
    const instagram: HTMLInputElement | null = document.querySelector(
      '[name="user-instagram"]'
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
      // profilepic: profilepic ? profilepic : null,
      firstname: firstname ? firstname.value : null,
      lastname: lastname ? lastname.value : null,
      title: title ? title.value : null,
      phone: phone ? phone.value : null,
      about: about ? about.value : null,
      oldpassword: oldpassword ? oldpassword.value : null,
      password: password ? password.value : null,
      facebook: facebook ? facebook.value : null,
      twitter: twitter ? twitter.value : null,
      linkedin: linkedin ? linkedin.value : null,
      instagram: instagram ? instagram.value : null,
      userID: userID
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
        const { status, message } = response;

        console.log(status, '\n', message); // log to console to see what it prints.

        // if spinner is showing and you're done with saving stuff
        // now hide the spinner
        if (spinner) spinner.classList.add('uk-hidden');

        // do whatever else you need to do
        // window.location.reload(true);
      });
  };

  return (
    <form
      id='user-profile'
      autoComplete='off'
      onSubmit={event => handleUserInformation(event)}
    >
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
                <input type='file' name='user-pic' />
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
                type='text'
                placeholder='Alas'
                name='user-lastname'
              ></input>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='title'>
                Title
              </label>
              <select className='uk-select' name='user-title'>
                <option></option>
                <option>Student</option>
                <option>Instructor</option>
                <option>Teaching Assistant</option>
              </select>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='phone number'>
                Phone #
              </label>
              <input
                className='uk-input'
                type='tel'
                placeholder='xxx-xxx-xxxx'
                name='user-phone'
                autoComplete='off'
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
            rows={5}
            placeholder='Something interesting about you!'
            name='user-about'
          ></textarea>
        </div>
      </div>

      <fieldset id='password-componenet' className='uk-fieldset'>
        <legend className='uk-legend'>Change Password</legend>
        <hr />

        <div className='uk-grid uk-child-width-1-2@s'>
          <div>
            <label className='uk-form-label' htmlFor='current password'>
              Current Password
            </label>
            <input
              className='uk-input uk-form-large uk-margin-bottom'
              type='password'
              placeholder=''
              autoComplete='new-password'
              name='user-oldpassword'
            ></input>

            <label className='uk-form-label' htmlFor='new password'>
              <Password
                label='New Password'
                autocomplete='new-password'
                required={false}
              />
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className='uk-fieldset uk-margin-top'>
        <legend className='uk-legend'>Social Links</legend>
        <hr />

        <div className='uk-grid uk-child-width-1-2@s'>
          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='facebook'>
              Facebook
            </label>
            <input
              className='uk-input'
              type='url'
              placeholder=''
              name='user-fb'
            ></input>
          </div>

          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='twitter'>
              Twitter
            </label>
            <input
              className='uk-input'
              type='url'
              placeholder=''
              name='user-twitter'
            ></input>
          </div>
        </div>

        <div className='uk-grid uk-child-width-1-2@s uk-margin-remove-top'>
          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='linkedin'>
              LinkedIn
            </label>
            <input
              className='uk-input'
              type='url'
              placeholder=''
              name='user-linkedin'
            ></input>
          </div>

          <div className='uk-margin-bottom'>
            <label className='uk-form-label' htmlFor='instagram'>
              Instagram
            </label>
            <input
              className='uk-input'
              type='url'
              placeholder=''
              name='user-instagram'
            ></input>
          </div>
        </div>
      </fieldset>

      <button
        type='submit'
        form='user-profile'
        className='uk-button uiif-button'
      >
        Save
        <i className='fas fa-long-arrow-alt-right arrow-icon'></i>
      </button>
    </form>
  );
};

export default UserInfoInput;
