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

function getUserImage(userDetails: { avatar_url: any; first_name: any; last_name: any; status?: undefined }) {
  return (
    <Link href="/user-profile">
      <a className="white">
        <img src={userDetails && userDetails.avatar_url ? userDetails.avatar_url : process.env.HOST + "images/logo/spark-360x360.png"}
          alt="user profile image"
          className="bg-white"
          title={userDetails ? userDetails?.first_name + " " + userDetails?.last_name : "user profile image"}
        />
      </a>
    </Link>
  );
}

function getUserFirstName(userDetails: { avatar_url?: undefined; first_name: any; last_name?: undefined; status?: undefined }) {
  return userDetails ? userDetails?.first_name : "pal";
}

function getUserLastName(userDetails: { avatar_url?: undefined; first_name: any; last_name?: undefined; status?: undefined }) {
  return userDetails ? userDetails?.last_name : "";
}

function getLoginLink(color: string): JSX.Element {
  return (
    <Link href='/authenticate'>
      <a className={`${color}`}>Login</a>
    </Link>
  );
}

function User(props: { isMobile?: boolean }): JSX.Element {
  const {isMobile = false} = props;
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
    const abortController = new AbortController();

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

    return () => {
      abortController.abort();
    };
  }, []);


  return (
    <div id="navigation-user-component" className={`uk-navbar-right ${!user ? "isGuest" : ""}`}>


      {/* if user is not logged in and not mobile*/}
      {!user && !isMobile && (
        <ul className="uk-navbar-nav ">
          <li className="uk-visible@m">
            {getLoginLink("white")}
          </li>
          {getMobileToggle()}
        </ul>
      )}

      {/* if user is logged in and not mobile version*/}
      {user && access && !isMobile && (
        <ul className="uk-navbar-nav ">
          <li className="uk-visible@m" title="Your messages.">
            {/* user messages */}
            <Messages mobile={false} />
          </li>
          <li className="uk-visible@m" title="Your notifications.">
            {/* user notification */}
            <Notifications mobile={false} />
          </li>
          <li className="uk-visible@m">
            {/* user profile */}

            {getUserImage(userDetails)}

            <div className="uk-navbar-dropdown">
              <div>
                <p className="uk-text-capitalize">Hello {getUserFirstName(userDetails)}!</p>
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

      {userDetails.first_name == undefined && isMobile && !access && (
        <>
          <img
            src="/images/logo/spark-text-carbon.svg"
            alt="spark-snow-logo"
            className="offcanvas-logo"
            title="Spark mobile menu"
          />
          <hr/>
          {getLoginLink("black")}
        </>
      )}

      {userDetails.first_name !== undefined && isMobile && access && (
        <>
          <span id="mobile-user-nav-toggle">
            <i className="fas fa-caret-right primary" uk-toggle="target: .toggle-user-nav-mobile; animation: uk-animation-slide-right"/>
          </span>


          <div id="user-mobile-nav-details" className="w-100 uk-text-center">
            <div className="grid w-100 toggle-user-nav-mobile">
              <div className="w-100 user-mobile-image">
                {getUserImage(userDetails)}
              </div>
              <div className="w-100  uk-margin-small-top">
                <Link href="/profile">
                  <a className="uk-text-capitalize">
                    {getUserFirstName(userDetails) + " " + getUserLastName(userDetails)}
                  </a>
                </Link>
                <div id="user-details-mobile" className="w-100 grid">
                  <div className="w-15 user-details-notifications-mobile">
                    <Notifications mobile={true}/>
                  </div>
                  <div className="w-15 user-details-messages-mobile">
                    <Messages mobile={true}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="user-mobile-nav-settings" className="w-100 toggle-user-nav-mobile" hidden>
            <ul className="w-90 grid user-settings-mobile">
              <li className="w-50 uk-text-center dark-gray" title="Your user dashboard">
                <Link href="/dashboard">
                  <a>
                    <i className="fal fa-tachometer-alt-fast"/>
                    <span className="uk-display-block">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li className="w-50 uk-text-center dark-gray" title="Your account settings">
                <Link href="/settings">
                  <a>
                    <i className="fal fa-cog"/>
                    <span className="uk-display-block">Settings</span>
                  </a>
                </Link>
              </li>
              <li className="w-50 uk-text-center dark-gray" title="Your profile">
                <Link href="/profile">
                  <a>
                    <i className="fal fa-user-circle"/>
                    <span className="uk-display-block">Profile</span>
                  </a>
                </Link>
              </li>
              <li className="w-50 uk-text-center dark-gray" title="Logout">
                <LogOut content={
                  <>
                    <i className="fal fa-sign-out"/>
                    <span className="uk-display-block">Sign Out</span>
                  </>
                } />
              </li>
            </ul>
          </div>
          <hr/>
        </>
      )}

    </div>
  );
}

export default User;
