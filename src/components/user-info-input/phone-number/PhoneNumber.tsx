// =======================================================================
// Known Issues/Todos
// ===================
//  - add phone number verification -- format any way you see fit
//  - editing number caret placement after you set an element's value
//  - minimum number of characters
//  - strip spaces and special characters before saving to db
// Version 2
// =======================================================================

import React from 'react';

const isNumericInput = (event: any) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event: any) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

const enforceFormat = (event: any) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event: any) => {
  if (isModifierKey(event)) {
    return;
  }

  // I am lazy and don't like to type things more than once
  const target = event.target;
  const input = target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    target.value = `(${zip}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    target.value = `(${zip}) ${middle}`;
  } else if (input.length > 0) {
    target.value = `(${zip}`;
  }
};

const PhoneNumber = (props?: any) => {
  return (
    <input
      className='uk-input'
      type='tel'
      placeholder='xxx-xxx-xxxx'
      defaultValue={props.defaultValue}
      name='user-phone'
      autoComplete='off'
      onKeyDown={(event) => enforceFormat(event)}
      onKeyUp={(event) => formatToPhone(event)}
      // pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'
    ></input>
  );
};

export default PhoneNumber;
