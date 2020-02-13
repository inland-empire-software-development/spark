import React from 'react';
import Link from "next/link";

function Messages(): JSX.Element {
  return (
    <Link href="/user-mail">
      <a className="white bg-snow">
        <span className="notification-bubble">110</span>
        <i className="fal fa-envelope"></i>
        <span className="notification-status"/>
      </a>
    </Link>
  );
}

export default Messages;
