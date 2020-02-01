import React from 'react';
import './Page.scss';

// Need links and scss with UIkit
// mock user profile

function Page(props: { content: JSX.Element }): JSX.Element {
  const {content} = props;
  return (
    <div id="page" className="uk-flex" >
      {content}
    </div>
  );
}

export default Page;
