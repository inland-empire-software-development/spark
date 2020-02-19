import React, {useContext, useState, useEffect} from 'react';
import Link from "next/link";
import Context from '../../../../../context';

function getMessageNotifications(count: number | undefined): JSX.Element {
  const notifications = count && count > 0;
  return (
    <>
      <span className={`notification-bubble ${!notifications ? "uk-hidden" : ""}`}>
        {count}
      </span>
      <i className="fal fa-envelope"></i>
      <span className={`notification-status ${!notifications ? "uk-hidden" : ""}`}/>
    </>
  );
}

function Messages(): JSX.Element {
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
        {getMessageNotifications(messageCount.count)}
      </a>
    </Link>
  );
}

export default Messages;
