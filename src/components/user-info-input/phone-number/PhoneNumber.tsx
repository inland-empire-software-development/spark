import React from 'react';

const PhoneNumber = (props?: any) => {
  return (
    <input
      id='phoneNumber'
      className='uk-input'
      type='tel'
      placeholder='xxx-xxx-xxxx'
      defaultValue={props.defaultValue}
      name='user-phone'
      autoComplete='off'
      // pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'
    ></input>
  );
};

export default PhoneNumber;
