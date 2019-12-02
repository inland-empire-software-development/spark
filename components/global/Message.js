import React from 'react';

function Message(props){

  const getPriority = () =>  props.priority ? ['primary', 'warning', 'error'][props.priority] : 'secondary';

  return(
      <section id="global-message" className={`bg-${getPriority()} ${!props.hidden ? "uk-hidden" : ""}`}>
        <p>{props.message}</p>
      </section>
  )
}

export default Message;
