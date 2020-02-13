import React from 'react';
import Link from "next/link";

function Notifications(): JSX.Element {
  return (
    <Link href="/user-notification">
      <a className="white bg-snow">
        <span className="notification-bubble">110</span>
        <i className="fal fa-bell"></i>
        <span className="notification-status"/>
      </a>
    </Link>
  );
}

export default Notifications;
