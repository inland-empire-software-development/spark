import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import Context from '../../../../../context';

function getNotifications(props: {count: number | undefined; mobile: boolean}): JSX.Element {
  const {count, mobile} = props;
  const notifications = (count !== undefined && count > 0 && !mobile) || (mobile && count !== undefined && count >= 0);

  return (
    <>
      <span className={`notification-bubble ${!Boolean(notifications) ? "uk-hidden" : ""}`}>
        {count}
      </span>
      <i className="fal fa-bell"/>
      <span className={`notification-status ${!Boolean(notifications) ? "uk-hidden" : ""}`}/>
    </>
  );
}

function Notifications(props: {mobile: boolean}): JSX.Element {
  const {mobile = false} = props;
  const {user, userID} = useContext(Context);
  const data = {
    user,
    userID,
  };

  const [notificationCount, setNotificationCount]= useState({
    "count": undefined,
  });

  useEffect(() => {
    const abortController = new AbortController();

    if (userID !== undefined && user !== undefined) {
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

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Link href="/profile">
      <a className="white bg-snow isMobile">
        {getNotifications({count: notificationCount.count, mobile})}
      </a>
    </Link>
  );
}

export default Notifications;

