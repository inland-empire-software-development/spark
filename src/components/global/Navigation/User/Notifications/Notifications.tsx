import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import Context from '../../../../../context';

function getNotifications(count: number | undefined): JSX.Element {
  const notifications = count && count > 0;
  return (
    <>
      <span className={`notification-bubble ${!notifications ? "uk-hidden" : ""}`}>
        {count}
      </span>
      <i className="fal fa-bell"/>
      <span className={`notification-status ${!notifications ? "uk-hidden" : ""}`}/>
    </>
  );
}

function Notifications(): JSX.Element {
  const {user, userID} = useContext(Context);
  const data = {
    user,
    userID,
  };

  const [notificationCount, setNotificationCount]= useState({
    "count": undefined,
  });

  useEffect(() => {
    console.log("Checking for user ID");
    if (userID !== undefined && user !== undefined) {
      console.log("User ID && name found");
      fetch(process.env.HOST + "api/notifications", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((response) => {
            setNotificationCount({
              count: response,
            });
          });
    }
  }, []);

  return (
    <Link href="/profile">
      <a className="white bg-snow">
        {getNotifications(notificationCount.count)}
      </a>
    </Link>
  );
}

export default Notifications;

