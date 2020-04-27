// =======================================================================
// Known Issues/Todos
// ===================
//  - add phone number verification -- see PhoneNumber.tsx for details
//  - should user be logged out when password is updated?
//  - if multiple notifications subsequent notifications are ignored
//     - One big notification or change this behavior?
//  - Server side validation
// Version 1.5
//  - optimize db queries
//  - rewrite logic to push form data to api
//  - rewrite logic for checks
//  - image crop should be it's own component
// Version 2
//  - need more robust error checking
//  - drag and drop pictures
//  - clear user picture from database
// =======================================================================

import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  FormEvent,
} from 'react';
import './UserInfoInput.scss';
import {Message} from '../../..';
import Password from '../authenticate/Password/Password';
import {Context} from '../../../src/context';
import notify from '../utility/Notify';
import PhoneNumber from './phone-number/PhoneNumber';
import {desanitize} from './sanitize/sanitize';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
import imageCompression from 'browser-image-compression';

const UserInfoInput = () => {
  // this gets the global spinner.
  const spinner: HTMLElement | null = document.getElementById('spinner');
  let message: string | null = null;
  let avatarURL: string | null = null;
  const {user, userID} = useContext(Context);
  const [formSubmittedFlag, setFormSubmittedFlag] = useState(false as boolean);
  const [picUploaded, setPicUploaded] = useState(false as boolean);
  const [avatarData, setAvatarData] = useState((undefined as unknown) as any);
  const [upImg, setUpImg] = useState((undefined as unknown) as any);
  const [imgRef, setImgRef] = useState(null as any);
  const [previewURL, setPreviewURL] = useState((undefined as unknown) as any);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10,
    aspect: 1,
  } as any);
  const [userDetails, setUserDetails] = useState({
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url: (undefined as unknown) as string,
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: (undefined as unknown) as string,
    // eslint-disable-next-line @typescript-eslint/camelcase
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
            // eslint-disable-next-line @typescript-eslint/camelcase
            response.avatar_url = desanitize(response.avatar_url);
            // eslint-disable-next-line @typescript-eslint/camelcase
            response.first_name = desanitize(response.first_name);
            // eslint-disable-next-line @typescript-eslint/camelcase
            response.last_name = desanitize(response.last_name);
            response.title = desanitize(response.title);
            response.phone = desanitize(response.phone);
            response.about = desanitize(response.about);
            response.facebook = desanitize(response.facebook);
            response.twitter = desanitize(response.twitter);
            response.linkedin = desanitize(response.linkedin);
            response.instagram = desanitize(response.instagram);

            console.log('Response: ', response);
            setUserDetails(response);
          });
    }

    return () => {
      abortController.abort();
    };
  }, [formSubmittedFlag]);

  function getUserImage(userDetails: { avatar_url: string }) {
    return (
      <img
        id='avatarID'
        src={
          previewURL ?
            previewURL :
            userDetails && userDetails.avatar_url ?
              process.env.HOST + userDetails.avatar_url :
              process.env.HOST + 'images/avatars/placeholder_image.png'
        }
        alt='Placeholder Image'
      />
    );
  }

  const handleFileUpload = (e: FileList | null) => {
    if (e && e[0]) {
      // show spinner while working
      if (spinner) spinner.classList.remove('uk-hidden');

      // Check if valid image
      const testImage = new Image();
      testImage.onload = () => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          setUpImg(reader.result);

          // clear file input
          const userInput = document.getElementById(
              'user-input',
          ) as HTMLInputElement;
          userInput.value = '';

          // now hide the spinner
          if (spinner) spinner.classList.add('uk-hidden');

          UIkit.modal('#avatarModal').show();
        });
        reader.readAsDataURL(e[0]);
      };
      testImage.onerror = () => {
        console.log('Is not a image\n');

        message = 'Invalid file: Please choose a image';
        notify({
          message,
          status: 'warning',
          pos: 'bottom-right',
          timeout: 1500,
        });

        // now hide the spinner
        if (spinner) spinner.classList.add('uk-hidden');
      };
      testImage.src = URL.createObjectURL(e[0]);
    } else {
      console.log('no file');

      message = 'No file detected';
      notify({
        message,
        status: 'danger',
        pos: 'bottom-right',
        timeout: 1500,
      });
    }
  };

  const onLoad = useCallback((img) => {
    setImgRef(img);
  }, []);

  const createCropPreview = async (image: any, crop: any) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const cropX = (crop.x / 100) * image.width;
    const cropY = (crop.y / 100) * image.height;
    canvas.width = (crop.width / 100) * image.width;
    canvas.height = (crop.height / 100) * image.height;

    const ctx = canvas.getContext('2d');

    // console.log('Crop: ', crop, '\n');

    if (ctx) {
      ctx.drawImage(
          image,
          cropX * scaleX,
          cropY * scaleY,
          canvas.width * scaleX,
          canvas.height * scaleY,
          0,
          0,
          canvas.width,
          canvas.height,
      );
    }

    return new Promise((_resolve, reject) => {
      canvas.toBlob((blob: any) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }

        // compress image crop
        const imageFile = blob;

        const options = {
          maxSizeMB: 0.5,
          useWebWorker: true,
          onProgress: () => null,
        };
        imageCompression(imageFile, options)
            .then(function(compressedFile) {
              window.URL.revokeObjectURL(previewURL);
              setPreviewURL(window.URL.createObjectURL(blob));

              setPicUploaded(true);

              // now hide the spinner
              if (spinner) spinner.classList.add('uk-hidden');

              return setAvatarData(compressedFile);
            })
            .catch(function(error) {
            // now hide the spinner
              if (spinner) spinner.classList.add('uk-hidden');

              console.log(error.message);
            });
      }, 'image/jpeg');
    });
  };

  const makeClientCrop = async () => {
    if (imgRef && crop.width && crop.height) {
      // show spinner while working
      if (spinner) spinner.classList.remove('uk-hidden');

      createCropPreview(imgRef, crop);
    } else if (imgRef) {
      // Center a square percent crop.
      const width =
        imgRef.width > imgRef.height ?
          (imgRef.height / imgRef.width) * 100 :
          100;
      const height =
        imgRef.height > imgRef.width ?
          (imgRef.width / imgRef.height) * 100 :
          100;
      const x = width === 100 ? 0 : (100 - width) / 2;
      const y = height === 100 ? 0 : (100 - height) / 2;

      const defaultCrop = {
        unit: '%',
        width,
        height,
        x,
        y,
        aspect: 1,
      };

      createCropPreview(imgRef, defaultCrop);
    } else {
      message = 'Invalid crop: Please contact support';
      notify({
        message,
        status: 'danger',
        pos: 'bottom-right',
        timeout: 1500,
      });
    }
  };

  const onCropChange = (_crop: any, percentCrop: any) => setCrop(percentCrop);

  const handleUserInformation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents form from reloading page (form submission)

    if (picUploaded) {
      avatarURL = `./images/avatars/${user}-${userID}-avatar.jpg`;
    }

    // getting user input from form.
    const firstnameField: HTMLInputElement | null = document.querySelector(
        '[name="user-firstname"]',
    );
    const lastnameField: HTMLInputElement | null = document.querySelector(
        '[name="user-lastname"]',
    );
    const titleField: HTMLInputElement | null = document.querySelector(
        '[name="user-title"]',
    );
    const phoneField: HTMLInputElement | null = document.querySelector(
        '[name="user-phone"]',
    );
    const aboutField: HTMLInputElement | null = document.querySelector(
        '[name="user-about"]',
    );
    const oldpasswordField: HTMLInputElement | null = document.querySelector(
        '[name="user-oldpassword"]',
    );
    const passwordField: HTMLInputElement | null = document.querySelector(
        '[name="password-component"]',
    );
    const facebookField: HTMLInputElement | null = document.querySelector(
        '[name="user-fb"]',
    );
    const twitterField: HTMLInputElement | null = document.querySelector(
        '[name="user-twitter"]',
    );
    const linkedinField: HTMLInputElement | null = document.querySelector(
        '[name="user-linkedin"]',
    );
    const instagramField: HTMLInputElement | null = document.querySelector(
        '[name="user-instagram"]',
    );

    // all data you want to pass over to API, name it appropriately
    const data = {
      avatarURL: avatarURL,
      firstname:
        firstnameField?.value !== userDetails.first_name ? firstnameField?.value : null,
      lastname:
        lastnameField?.value !== userDetails.last_name ? lastnameField?.value : null,
      title: titleField?.value !== userDetails.title ? titleField?.value : null,
      phone:
        phoneField?.value.replace(/\D/g, '') !== userDetails.phone ?
          phoneField?.value.replace(/\D/g, '') :
          null,
      about: aboutField?.value !== userDetails.about ? aboutField?.value : null,
      oldpassword: oldpasswordField ? oldpasswordField.value : null,
      password: passwordField ? passwordField.value : null,
      facebook:
        facebookField?.value !== userDetails.facebook ?
          facebookField?.value :
          null,
      twitter:
        twitterField?.value !== userDetails.twitter ?
          twitterField?.value :
          null,
      linkedin:
        linkedinField?.value !== userDetails.linkedin ?
          linkedinField?.value :
          null,
      instagram:
        instagramField?.value !== userDetails.instagram ?
          instagramField?.value :
          null,
      userID: userID,
    };

    // console.log('firstnameField.value: ', firstnameField?.value, '\n');
    // console.log('UserDetails.first_name: ', userDetails.first_name, '\n');
    // console.log('titleField.value: ', titleField?.value, '\n');
    // console.log('UserDetails.title: ', userDetails.title, '\n');

    if (
      picUploaded ||
      data.firstname ||
      data.firstname === '' ||
      data.lastname ||
      data.lastname === '' ||
      data.title ||
      data.title === '' ||
      data.phone ||
      data.phone === '' ||
      data.about ||
      data.about === '' ||
      data.oldpassword ||
      data.password ||
      data.facebook ||
      data.facebook === '' ||
      data.twitter ||
      data.twitter === '' ||
      data.linkedin ||
      data.linkedin === '' ||
      data.instagram ||
      data.instagram === ''
    ) {
      // show spinner while working
      if (spinner) spinner.classList.remove('uk-hidden');

      let formFieldsSuccess = false;
      let formImageSuccess = false;

      // Call api/user/personal
      fetch(process.env.HOST + 'api/user/personal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then((response: { json: () => any }) => response.json())
          .then((response: Message) => {
            const {status, message} = response;
            const {
              firstNameMessage,
              lastNameMessage,
              titleMessage,
              phoneMessage,
              aboutMessage,
              facebookMessage,
              twitterMessage,
              linkedinMessage,
              instagramMessage,
            }: {
            firstNameMessage: string;
            lastNameMessage: string;
            titleMessage: string;
            phoneMessage: string;
            aboutMessage: string;
            facebookMessage: string;
            twitterMessage: string;
            linkedinMessage: string;
            instagramMessage: string;
          } = JSON.parse(message);

            if (!status) {
              if (firstNameMessage) {
                console.log('FirstNameMessage', firstNameMessage, '\n');
                notify({
                  message: firstNameMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (lastNameMessage) {
                console.log('LastNameMessage: ', lastNameMessage, '\n');
                notify({
                  message: lastNameMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (titleMessage) {
                console.log('LastNameMessage: ', titleMessage, '\n');
                notify({
                  message: titleMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (phoneMessage) {
                console.log('LastNameMessage: ', phoneMessage, '\n');
                notify({
                  message: phoneMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (aboutMessage) {
                console.log('LastNameMessage: ', aboutMessage, '\n');
                notify({
                  message: aboutMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (facebookMessage) {
                console.log('LastNameMessage: ', facebookMessage, '\n');
                notify({
                  message: facebookMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (twitterMessage) {
                console.log('LastNameMessage: ', twitterMessage, '\n');
                notify({
                  message: twitterMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (linkedinMessage) {
                console.log('LastNameMessage: ', linkedinMessage, '\n');
                notify({
                  message: linkedinMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
              if (instagramMessage) {
                console.log('LastNameMessage: ', instagramMessage, '\n');
                notify({
                  message: instagramMessage,
                  status: 'danger',
                  pos: 'bottom-right',
                  timeout: 1500,
                });
              }
            } else {
              formFieldsSuccess = status;
            }

            // console.log(status, '\n', message); // log to console to see what it prints.

            if (picUploaded) {
            // console.log('avatarData: ', typeof avatarData, ':', avatarData, '\n');

              fetch(process.env.HOST + 'api/user/upload', {
                method: 'POST',
                headers: {
                  'Content-Type': avatarData ?
                  avatarData.type :
                  'application/json',
                  'User-identification':
                  String(user) + '-' + String(userID) + '-avatar.jpg',
                },
                body: avatarData ? avatarData : null,
              })
                  .then((response: { json: () => any }) => response.json())
                  .then((response: Message) => {
                    const {status, message} = response;
                    if (!status) {
                      console.log(message, '\n');
                      notify({
                        message: message,
                        status: 'danger',
                        pos: 'bottom-right',
                        timeout: 1500,
                      });
                    } else {
                      formImageSuccess = status;
                    }
                  });
            }
          })
          .then(() => {
            setPicUploaded(false);
            setFormSubmittedFlag(!formSubmittedFlag);
            // if spinner is showing and you're done with saving stuff
            // now hide the spinner
            if (spinner) spinner.classList.add('uk-hidden');

            // do whatever else you need to do
            if (formFieldsSuccess || formImageSuccess) {
              notify({
                message: 'User information successfully updated',
                status: 'success',
                pos: 'bottom-right',
                timeout: 1500,
              });
            }

            // window.location.reload(true);
            if (oldpasswordField) {
              oldpasswordField.value = '';
            }
            if (passwordField) {
              passwordField.value = '';
            }
          // const profileForm: HTMLFormElement = document.getElementById(
          //   'user-profile'
          // ) as HTMLFormElement;
          // profileForm.reset();
          });
    } else {
      notify({
        message: 'Nothing to update...',
        status: 'primary',
        pos: 'bottom-right',
        timeout: 1500,
      });
    }
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
            ruleOfThirds={false}
          />
          <hr />

          <p className='uk-text-right'>
            <button
              className='uk-button uk-button-default uk-modal-close'
              type='button'
            >
              Cancel
            </button>
            <button
              className='uk-button uiif-button uk-modal-close'
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
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Student'
                  defaultValue={userDetails.title}
                  name='user-title'
                ></input>
              </div>

              <div className='uk-margin-bottom'>
                <label className='uk-form-label' htmlFor='phone number'>
                  Phone #
                </label>
                <PhoneNumber defaultValue={userDetails.phone} />
                {/* <input
                  id='phoneNumber'
                  className='uk-input'
                  type='tel'
                  placeholder='xxx-xxx-xxxx'
                  defaultValue={userDetails.phone}
                  name='user-phone'
                  autoComplete='off'
                  // pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'
                ></input> */}
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
