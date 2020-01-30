import React from 'react';
import './Spinner.scss';

function Spinner(props: any): JSX.Element {
  const {classes, ratio = 6} = props;
  return (
    <div id="spinner" className={classes}>
      <div uk-spinner={`ratio: ${ratio}`}/>
    </div>
  );
}

export default Spinner;
