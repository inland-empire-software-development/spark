import React from 'react';
function ContentContainer(props: {content: JSX.Element}): JSX.Element {
  // only render page if user, token found in query

  return (
    <div className="content-container uk-section uk-flex uk-flex-middle uk-animation-fade">
      {props.content}
    </div>
  );
}

export default ContentContainer;
