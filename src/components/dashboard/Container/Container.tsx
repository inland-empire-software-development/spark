import React from 'react';
import './Container.scss';

function Container(props: { content: JSX.Element }): JSX.Element {
  const {content} = props;
  return (
    <div id="container">
      {content}
    </div>
  );
}

export default Container;
