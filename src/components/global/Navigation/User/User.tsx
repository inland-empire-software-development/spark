import React, {useContext} from 'react';
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
  const {user} = useContext(Context);

  console.log(user);
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
              <a className="white bg-snow profile">
                <i className="fa fa-user"></i>
              </a>
            </Link>
            <div className="uk-navbar-dropdown">
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
