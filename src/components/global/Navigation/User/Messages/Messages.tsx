import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import {Context} from '../../../../../context';

function getMessageNotifications(props: {count: number | undefined; mobile: boolean}): JSX.Element {
  const {count, mobile} = props;
  const notifications = (count !== undefined && count > 0 && !mobile) || (mobile && count !== undefined && count >= 0);

  return (
    <>
      <span className={`notification-bubble ${!Boolean(notifications) ? "uk-hidden" : ""}`}>
        {count}
      </span>
      <i className="fal fa-envelope"/>
      <span className={`notification-status ${!Boolean(notifications) ? "uk-hidden" : ""}`}/>
    </>
  );
}

function Messages(props: {mobile: boolean}): JSX.Element {
  const {mobile = false} = props;
  const {user, userID} = useContext(Context);
  const data = {
    user,
    userID,
  };

  const [messageCount, setMessageCount]= useState({
    "count": undefined,
  });

  useEffect(() => {
    const abortController = new AbortController();

    if (userID !== undefined && user !== undefined) {
      fetch(process.env.HOST + "api/messages", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((response) => {
            setMessageCount({
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
        {getMessageNotifications({count: messageCount.count, mobile})}
      </a>
    </Link>
  );
}

export default Messages;
