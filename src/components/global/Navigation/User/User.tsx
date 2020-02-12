import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import Context from '../../../../context';

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
  const {user, userID} = useContext(Context);
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
    console.log("Checking for user ID");
    if (userID !== undefined) {
      console.log("User ID found");
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
      {user && (
        <ul className="uk-navbar-nav ">
          <li className="uk-visible@m">
            {/* user mail */}
            <Link href="/user-mail">
              <a className="white bg-snow">
                <span className="notification-bubble">110</span>
                <i className="fal fa-envelope"></i>
                <span className="notification-status"/>
              </a>
            </Link>
          </li>
          <li className="uk-visible@m">
            {/* user notification */}
            <Link href="/user-notification">
              <a className="white bg-snow">
                <span className="notification-bubble">110</span>
                <i className="fal fa-bell"></i>
                <span className="notification-status"/>
              </a>
            </Link>
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
                  <Link href='/user/user-profile/dashboard'>
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href='/user/user-profile/profile'>
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href='/user/user-profile/setting'>
                    <a>Setting</a>
                  </Link>
                </li>
                <li>
                  <Link href='/user/user-profile/log-out'>
                    <a>Log out</a>
                  </Link>
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
