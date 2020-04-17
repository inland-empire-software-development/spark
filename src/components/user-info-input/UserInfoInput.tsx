/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
// ===================
//  - add phone number verification -- need format guidelines
//  - Need error checking for uploaded file, img needs optimization
//  - should user be logged out when password is updated?
//  - error messages/notifications when errors happen 
//      * i.e. fail to change data
//  - seperate concerns 
//      * image crop should be it's own file
// V2
//  - drag and drop pictures
//  - reset input fields remove user info from db
//      * i.e. remove facebook, etc address from db
//  - toast notifications
// =======================================================================

import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  FormEvent,
} from 'react';
import './UserInfoInput.scss';
import { Message } from '../../..';
import Password from '../authenticate/Password/Password';
import { Context } from '../../../src/context';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

//let avatarURL: string | null = null;
//let picUploaded: boolean = false;
let avatarData: File | null = null;

const UserInfoInput = () => {
  const { user, userID } = useContext(Context);
  const [picUploaded, setPicUploaded] = useState(false as boolean);
  const [avatarURL, setAvatarURL] = useState((undefined as unknown) as string);
  const [upImg, setUpImg] = useState((undefined as unknown) as any);
  const [imgRef, setImgRef] = useState(null as any);
  const [previewURL, setPreviewURL] = useState((undefined as unknown) as any);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10,
  } as any);

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

  // set user title
  useEffect(() => {
    const title_selector: HTMLSelectElement | null = document.querySelector(
      '[name="user-title"]'
    );
    const title_options = title_selector?.options;
    if (title_options && title_selector) {
      for (let i = 0; i < title_options?.length; i++) {
        if (title_options[i].value == userDetails.title) {
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

  function getUserImage(userDetails: { avatar_url: string }) {
    return (
      <img
        id='avatarID'
        src={
          previewURL
            ? previewURL
            : userDetails && userDetails.avatar_url
            ? process.env.HOST + userDetails.avatar_url
            : process.env.HOST + 'images/avatars/placeholder_image.png'
        }
        alt='Placeholder Image'
      />
    );
  }

  const handleFileUpload = (e: FileList | null) => {
    if (e && e[0]) {
      UIkit.modal('#avatarModal').show();

      setPicUploaded(true);
      avatarData = e[0];

      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(avatarData);

      // const avatarImg = document.getElementById('avatarID') as HTMLImageElement;
      // //avatarImg.src = process.env.HOST + 'images/logo/spark-360x360.png';
      // avatarImg.src = URL.createObjectURL(avatarData);

      // console.log('avaarData: ', typeof avatarData, ':', avatarData, '\n');
      // console.log('e[0]: ', typeof e[0], ':', e[0], '\n');
      // console.log('crop: ', typeof crop, ':', crop, '\n');
      //console.log('UploadedImg: ', typeof(upImg), ':', upImg, '\n');

      // clear file input
      const userInput = document.getElementById(
        'user-input'
      ) as HTMLInputElement;
      userInput.value = '';
    }
  };

  const onLoad = useCallback((img) => {
    setImgRef(img);
  }, []);

  const makeClientCrop = async () => {
    if (imgRef && crop.width && crop.height) {
      console.log('UploadedImg: ', typeof upImg, ':', upImg, '\n');
      console.log('ImgRef: ', typeof imgRef, ':', imgRef, '\n');
      createCropPreview(imgRef, crop);
    }
  };

  const createCropPreview = async (image: any, crop: any) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = (crop.width / 100) * image.width;
    canvas.height = (crop.height / 100) * image.height;
    const ctx = canvas.getContext('2d');

    console.log('Crop: ', crop, '\n');

    if (ctx) {
      ctx.drawImage(
        image,
        (crop.x / 100) * image.width * scaleX,
        (crop.y / 100) * image.height * scaleY,
        canvas.width * scaleX,
        canvas.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return new Promise((_resolve, reject) => {
      canvas.toBlob((blob: any) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        
        window.URL.revokeObjectURL(previewURL);
        setPreviewURL(window.URL.createObjectURL(blob));
      }, 'image/jpeg');
    });
  };

  const onCropChange = (_crop: any, percentCrop: any) => setCrop(percentCrop);

  const handleUserInformation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents form from reloading page (form submission)

    if (picUploaded) {
      //avatarURL = `./images/avatars/${user}-${userID}-avatar.jpg`;
      setAvatarURL(`./images/avatars/${user}-${userID}-avatar.jpg`);
    }

    // getting user input from form.
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
              'Content-Type': avatarData ? avatarData.type : 'application/json',
              'User-identification':
                String(user) + '-' + String(userID) + '-avatar.jpg',
            },
            body: avatarData ? avatarData : null,
          });
        }
      })
      .then(() => {
        // if spinner is showing and you're done with saving stuff
        // now hide the spinner
        if (spinner) spinner.classList.add('uk-hidden');

        // do whatever else you need to do
        // window.location.reload(true);
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
    <div>
      <div id='avatarModal' className='uk-modal uk-open uk-flex-top'>
        <div className='uk-modal-dialog uk-margin-auto-vertical uk-modal-body'>
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={onCropChange}
            ruleOfThirds={true}
          />
          <p className='uk-text-right'>
            <button
              className='uk-button uk-button-default uk-modal-close'
              type='button'
            >
              Cancel
            </button>
            <button
              className='uk-button uiif-button'
              type='button'
              onClick={makeClientCrop}
            >
              Crop
              <i className='fas fa-crop-alt fas-icon'></i>
            </button>
          </p>
        </div>
      </div>

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
                    id='user-input'
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
                  defaultValue={userDetails.first_name}
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
                  defaultValue={userDetails.last_name}
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
                  defaultValue={userDetails.phone}
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
              defaultValue={userDetails.about}
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
                defaultValue={userDetails.facebook}
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
                defaultValue={userDetails.twitter}
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
                defaultValue={userDetails.linkedin}
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
                defaultValue={userDetails.instagram}
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
          <i className='fas fa-long-arrow-alt-right fas-icon'></i>
        </button>
      </form>
    </div>
  );
};

export default UserInfoInput;
