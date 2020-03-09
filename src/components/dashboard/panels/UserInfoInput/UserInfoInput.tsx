import React from 'react'
import './UserInfoInput.scss'

function UserInfoInput(): JSX.Element {
  return (
    <form className='uk-container uk-margin'>
      <fieldset className='uk-fieldset'>
        <legend className='uk-legend'>Personal Details</legend>
        <hr />
        <div className='uk-grid'>
          <div className='uk-width-1-5@m uk-margin-bottom'>
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

          <div className='uk-width-4-5@m uk-grid uk-margin-remove uk-padding-remove uk-child-width-1-2@s'>
            <div className='uk-margin-bottom'>
              <label className='uk-form-label' htmlFor='first name'>
                First Name
              </label>
              <input
                className='uk-input'
                id=''
                type='text'
                placeholder='Lloan'
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
              ></input>
            </div>
          </div>
        </div>

        <div className='uk-margin-bottom'>
          <label className='uk-form-label' htmlFor='personal information'>
            Personal Info
          </label>
          <textarea
            className='uk-textarea'
            id='form-h-textarea'
            rows={5}
            placeholder='Something interesting about you!'
          ></textarea>
        </div>
      </fieldset>

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
  )
}

export default UserInfoInput
