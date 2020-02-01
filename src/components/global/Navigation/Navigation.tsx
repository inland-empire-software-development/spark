import React from 'react';
import Link from 'next/link';
import './Navigation.scss';

// Need links and scss with UIkit
// mock user profile

function Navigation(): JSX.Element {
  return (
    <div className="gradient-background">
      <nav className="uk-navbar-container uk-navbar-transparent " uk-navbar="true">
        {/* Left portion for the logo */}
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">
                <img src="/images/logo/spark-text-snow.svg" alt="spark-snow-logo" />
              </a>
            </li>
            {/* Left-Middle Section for category links */}
            <li>
              <Link href='#'>
                <a className="white home">Home</a>
              </Link>
            </li>
            <li>
              <a className="white">Cohorts</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link href='/coharts/link-one'>
                      <a>Link one</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coharts/link-two'>
                      <a>Link two</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coharts/link-three'>
                      <a>Link three</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="white">Blog</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link href='/blog/link-one'>
                      <a>Link one</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog/link-two'>
                      <a>Link two</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="white">Contact</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link href='/contact/link-one'>
                      <a>Link one</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact/link-two'>
                      <a>Link one</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Right portion for user  */}
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              {/* user mail */}
              <Link href="/user-mail">
                <a className="white bg-snow">
                  <i className="fal fa-envelope"></i>
                </a>
              </Link>
            </li>
            <li>
              {/* user notification */}
              <Link href="/user-notification">
                <a className="white bg-snow">
                  <i className="fal fa-bell"></i>
                </a>
              </Link>
            </li>
            <li>
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
