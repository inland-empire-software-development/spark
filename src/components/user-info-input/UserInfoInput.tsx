/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
// ===================
//  - add phone number verification -- need format guidelines
//  - Need error checking for uploaded file, img needs optimization
//  - should user be logged out when password is updated?
//  - error messages/notifications when errors happen i.e. fail to change data
// V2
//  - drag and drop pictures
//  - reset input fields remove user info from db
//      * i.e. remove facebook, etc address from db
//  - toast notifications
// =======================================================================

import React, { useContext, useState, useEffect, FormEvent } from 'react';
import './UserInfoInput.scss';
import { Message } from '../../..';
import Password from '../authenticate/Password/Password';
import { Context } from '../../../src/context';

let avatarURL: string | null = null;
let picUploaded = false;
const handleFileUpload = (e: FileList | null) => {
  if (e && e[0]) {
    picUploaded = true;
    let avatarImg = document.getElementById('avatarID') as HTMLImageElement;
    avatarImg.src = process.env.HOST + 'images/logo/spark-360x360.png';
    avatarImg.src = URL.createObjectURL(e[0]);
  }
};

function getUserImage(userDetails: { avatar_url: any }) {
  return (
    <img
      id='avatarID'
      src={
        userDetails && userDetails.avatar_url
          ? process.env.HOST + userDetails.avatar_url
          : process.env.HOST + 'images/profilepics/placeholder_image.png'
      }
      alt='Placeholder Image'
    />
  );
}

function getUserFirstName(userDetails: { first_name: string }) {
  return userDetails ? userDetails.first_name : '';
}

function getUserLastName(userDetails: { last_name: string }) {
  return userDetails ? userDetails.last_name : '';
}

function getUserTitle(userDetails: { title: string }) {
  return userDetails ? userDetails.title : '';
}

function getUserPhone(userDetails: { phone: string }) {
  return userDetails ? userDetails.phone : '';
}

function getUserAbout(userDetails: { about: string }) {
  return userDetails ? userDetails.about : '';
}

function getUserFacebook(userDetails: { facebook: string }) {
  return userDetails ? userDetails.facebook : '';
}

function getUserTwitter(userDetails: { twitter: string }) {
  return userDetails ? userDetails.twitter : '';
}

function getUserLinkedin(userDetails: { linkedin: string }) {
  return userDetails ? userDetails.linkedin : '';
}

function getUserInstagram(userDetails: { instagram: string }) {
  return userDetails ? userDetails.instagram : '';
}

const UserInfoInput = () => {
  const { user, userID } = useContext(Context);
  const data = {
    key: [
      'avatar_url',
      'first_name',
      'last_name',
      'title',
      'phone',
      'about',
      'facebook',
      'twitter',
      'linkedin',
      'instagram',
    ],
    table: 'user_meta',
    identifier: 'user_ID',
    value: userID,
  };
  const [userDetails, setUserDetails] = useState({
    avatar_url: (undefined as unknown) as string,
    first_name: (undefined as unknown) as string,
    last_name: (undefined as unknown) as string,
    title: (undefined as unknown) as string,
    phone: (undefined as unknown) as string,
    about: (undefined as unknown) as string,
    facebook: (undefined as unknown) as string,
    twitter: (undefined as unknown) as string,
    linkedin: (undefined as unknown) as string,
    instagram: (undefined as unknown) as string,
  });

  // set user title
  useEffect(() => {
    const title_selector: HTMLSelectElement | null = document.querySelector(
      '[name="user-title"]'
    );
    const title_options = title_selector?.options;
    if (title_options && title_selector) {
      for (let i = 0; i < title_options?.length; i++) {
        if (title_options[i].value == getUserTitle(userDetails)) {
          title_selector.selectedIndex = i;
        }
      }
    }
  }, [userDetails.title]);

  useEffect(() => {
    const abortController = new AbortController();

    if (userID !== undefined) {
      fetch(process.env.HOST + 'api/meta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          setUserDetails(response);
        });
    }

    return () => {
      abortController.abort();
    };
  }, [userDetails]);

  const handleUserInformation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents form from reloading page (form submission)

    if (picUploaded) {
      avatarURL = `./images/profilepics/${user}${userID}-pic.jpg`;
    }

    // getting user input from form.
    const profilepic: HTMLInputElement | null = document.querySelector(
      '[name="user-image"]'
    );
    const firstname_field: HTMLInputElement | null = document.querySelector(
      '[name="user-firstname"]'
    );
    const lastname_field: HTMLInputElement | null = document.querySelector(
      '[name="user-lastname"]'
    );
    const title_field: HTMLSelectElement | null = document.querySelector(
      '[name="user-title"]'
    );
    const phone_field: HTMLInputElement | null = document.querySelector(
      '[name="user-phone"]'
    );
    const about_field: HTMLInputElement | null = document.querySelector(
      '[name="user-about"]'
    );
    const oldpassword_field: HTMLInputElement | null = document.querySelector(
      '[name="user-oldpassword"]'
    );
    const password_field: HTMLInputElement | null = document.querySelector(
      '[name="password-component"]'
    );
    const facebook_field: HTMLInputElement | null = document.querySelector(
      '[name="user-fb"]'
    );
    const twitter_field: HTMLInputElement | null = document.querySelector(
      '[name="user-twitter"]'
    );
    const linkedin_field: HTMLInputElement | null = document.querySelector(
      '[name="user-linkedin"]'
    );
    const instagram_field: HTMLInputElement | null = document.querySelector(
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
      profilePic: profilepic && profilepic.files ? profilepic.files : null,
      avatarURL: avatarURL,
      firstname:
        firstname_field && firstname_field.value !== userDetails.first_name
          ? firstname_field.value
          : null,
      lastname:
        lastname_field && lastname_field.value !== userDetails.last_name
          ? lastname_field.value
          : null,
      title:
        title_field && title_field.value !== userDetails.title
          ? title_field.value
          : null,
      phone:
        phone_field && phone_field.value !== userDetails.phone
          ? phone_field.value
          : null,
      about:
        about_field && about_field.value !== userDetails.about
          ? about_field.value
          : null,
      oldpassword: oldpassword_field ? oldpassword_field.value : null,
      password: password_field ? password_field.value : null,
      facebook:
        facebook_field && facebook_field.value !== userDetails.facebook
          ? facebook_field.value
          : null,
      twitter:
        twitter_field && twitter_field.value !== userDetails.twitter
          ? twitter_field.value
          : null,
      linkedin:
        linkedin_field && linkedin_field.value !== userDetails.linkedin
          ? linkedin_field.value
          : null,
      instagram:
        instagram_field && instagram_field.value !== userDetails.instagram
          ? instagram_field.value
          : null,
      userID: userID,
    };

    // console.log(
    //   `\n\nData.firstname: ${data.firstname} \nfirstname.value: ${firstname?.value} \nuserDetails.firstname: ${userDetails.first_name} \n`
    // );
    // console.log(`${data.firstname && data.firstname !== userDetails.first_name} \n`);

    fetch(process.env.HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response: { json: () => any }) => response.json())
      .then((response: Message) => {
        const { status, message } = response;

        console.log(status, '\n', message); // log to console to see what it prints.

        if (picUploaded) {
          fetch(process.env.HOST + 'api/user/upload', {
            method: 'POST',
            headers: {
              'Content-Type':
                data.profilePic && data.profilePic.length !== 0
                  ? data.profilePic[0].type
                  : 'application/json',
              'Image-name': data.profilePic
                ? data.profilePic[0].name
                : String(userID) + '-profile-image',
              'User-identification': String(user) + String(userID) + '-pic.jpg',
            },
            body: data.profilePic ? data.profilePic[0] : null,
          });
        }
      })
      .then(() => {
        // if spinner is showing and you're done with saving stuff
        // now hide the spinner
        if (spinner) spinner.classList.add('uk-hidden');

        // do whatever else you need to do
        window.location.reload(true);
        if (oldpassword_field) {
          oldpassword_field.value = '';
        }
        if (password_field) {
          password_field.value = '';
        }
        // const profileForm: HTMLFormElement = document.getElementById(
        //   'user-profile'
        // ) as HTMLFormElement;
        // profileForm.reset();
      });
  };

  return (
    <form
      id='user-profile'
      autoComplete='off'
      onSubmit={(event) => handleUserInformation(event)}
    >
      <div className='uk-fieldset'>
        <legend className='uk-legend'>Personal Details</legend>
        <hr />
        <div className='uk-grid'>
          <div className='uk-width-1-5@m uk-margin-bottom profile-pic-container'>
            <div className='js-upload uk-placeholder uk-width-medium img-upload-container'>
              {getUserImage(userDetails)}
              <div className='uk-width-expand uk-child-width-expand uk-form-custom'>
                <input
                  type='file'
                  accept='image/*'
                  name='user-image'
                  onChange={(event) => handleFileUpload(event.target.files)}
                />
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
                placeholder='Enter your first name here'
                defaultValue={getUserFirstName(userDetails)}
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
                placeholder='Enter your last name here'
                defaultValue={getUserLastName(userDetails)}
                name='user-lastname'
              ></input>
            </div>

            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='title'>
                Title
              </label>
              <select className='uk-select' name='user-title' defaultValue=''>
                <option hidden>Select One</option>
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
                defaultValue={getUserPhone(userDetails)}
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
            defaultValue={getUserAbout(userDetails)}
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
              placeholder='https://...'
              defaultValue={getUserFacebook(userDetails)}
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
              placeholder='https://...'
              defaultValue={getUserTwitter(userDetails)}
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
              placeholder='https://...'
              defaultValue={getUserLinkedin(userDetails)}
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
              placeholder='https://...'
              defaultValue={getUserInstagram(userDetails)}
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
