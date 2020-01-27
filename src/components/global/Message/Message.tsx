import React from 'react';
import './Message.scss';

interface Message {
  message: string;
  priority: number;
  hidden: boolean;
}

function Message(props: Message): JSX.Element {
  const colors = ['dark-gray', 'light-gray', 'snow', 'blue', 'green', 'yellow', 'red', 'primary', 'secondary', 'tertiary'];
  return (
    <section id="global-message" className={`bg-${colors[props.priority]} ${props.hidden ? "uk-hidden" : ""}`}>
      <p>{props.message}</p>
    </section>
  );
}

export default Message;
