import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import Context from '../../../../context';
import Messages from './Messages/Messages';
import Notifications from './Notifications/Notifications';
import LogOut from '../../../authenticate/LogOut/LogOut';

function getMobileToggle() {
  return (
    <li>
      <Link href="#offcanvas-nav">
        <a className="uk-navbar-toggle white uk-hidden@m" uk-navbar-toggle-icon="true" uk-toggle="target: #offcanvas-nav"></a>
      </Link>
    </li>
  );
}

function User(): JSX.Element {
  const {user, userID, access} = useContext(Context);
  const data = {
    key: ["avatar_url", "first_name", "last_name", "status"],
    table: "user_meta",
    identifier: "user_ID",
    value: userID,
  };

  const [userDetails, setUserDetails]= useState({
    "avatar_url": undefined,
    "first_name": undefined,
    "last_name": undefined,
    "status": undefined,
  });

  useEffect(() => {
    if (userID !== undefined) {
      fetch(process.env.HOST + "api/meta", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((response) => {
            setUserDetails(response);
          });
    }
  }, []);


  return (
    <div id="navigation-user-component" className="uk-navbar-right">


      {/* if user is not logged in */}
      {!user && (
        <ul className="uk-navbar-nav ">
          <li className="uk-visible@m">
            <Link href='/authenticate'>
              <a className="white">Login</a>
            </Link>
          </li>
          {getMobileToggle()}
        </ul>
      )}

      {/* if user is logged in */}
      {user && access && (
        <ul className="uk-navbar-nav ">
          <li className="uk-visible@m" title="Your messages.">
            {/* user messages */}
            <Messages />
          </li>
          <li className="uk-visible@m" title="Your notifications.">
            {/* user notification */}
            <Notifications />
          </li>
          <li className="uk-visible@m">
            {/* user profile */}
            <Link href="/user-profile">
              <a className="white">
                <img src={userDetails && userDetails.avatar_url ? userDetails.avatar_url : process.env.HOST + "images/logo/spark-360x360.png"}
                  alt="user profile image"
                  className="bg-white"
                  title={userDetails ? userDetails?.first_name + " " + userDetails?.last_name : "user profile image"}
                />
              </a>
            </Link>
            <div className="uk-navbar-dropdown">
              <div>
                <p>Hello {userDetails ? userDetails?.first_name : "pal"}!</p>
                <hr/>
              </div>
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <Link href='/dashboard'>
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href='/profile'>
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href='/settings'>
                    <a>Settings</a>
                  </Link>
                </li>
                <li>
                  <LogOut />
                </li>
              </ul>
            </div>
          </li>
          {getMobileToggle()}
        </ul>
      )}

    </div>
  );
}

export default User;
