/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Link from 'next/link';
import './Navigation.scss';
// import '../../../../public/images/logo'

export interface Options {
  [option: string]: any;
}

export interface ListObject {
  icon?: string | boolean;
  children?: Array<object> | boolean;
  target?: string;
  url?: string;
  label?: string;
};

const identifyLink = (url: string) => url.indexOf(`${process.env.HOST}`);

const renderLink = (obj: ListObject, opts: object) => {
  const {url = undefined} = obj;
  return identifyLink(url ? url : '') !== -1 ?
    <Link href={url ? url : ''}>
      <a {...opts}>{obj.label}</a>
    </Link> :
    <a {...opts} href={url}>
      {obj.label}
    </a>;
};

const createListItem = (
    obj: ListObject,
    mobile = false,
) => {
  const opts = {} as Options;

  if (obj.icon) {
    opts["uk-icon"] = "plus";
  }

  if (obj.target !== undefined) {
    opts["target"] = obj.target;
  }

  if (!obj.children && mobile) {
    opts["uk-toggle"] = "target: #offcanvas-nav";
  }

  return (
    <li key={ obj.label? obj.label.toLowerCase() : "'"}
      className={obj.children && mobile ?
        "uk-parent uk-visible-toggle" : "close-canvas"}>

      {renderLink(obj, opts)}

      {obj.children && mobile && getMobileSubList(obj)}
      {obj.children && !mobile && getSubList(obj)}
    </li>
  );
};


const getSubList = (obj: ListObject) =>
  <div className="uk-navbar-dropdown">
    <ul className="uk-nav uk-navbar-dropdown-nav">
      {(obj.children as Array<ListObject>) ? (obj.children as Array<ListObject>).map((child: ListObject) => createListItem(child)) : ""}
    </ul>
  </div>;

const getMobileSubList = (obj: Options) =>
  <ul className="uk-nav-sub uk-invisible-hover">
    {obj.children.map((child: ListObject) => createListItem(child))}
  </ul>;

const createListObject = ({
  label,
  url = "#",
  icon = false,
  children = false,
  target,
}: ListObject) => ({label, url, icon, children, target});

[
  {label: "Sponsors", url: "/#sponsors"},
  {label: "Sponsors", url: "/#sponsors"},
  {label: "Sponsors", url: "/#sponsors"},
  {label: "Sponsors", url: "/#sponsors"},
].map((item) => createListObject(item));

function Navigation(): JSX.Element {
  return (
    <div className="gradient-background">
      <nav className="uk-navbar-container uk-navbar-transparent " uk-navbar="true">
        {/* Left portion for the logo */}
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <li className="uk-active ">
              <a href="#" >
                <img src="/images/logo/spark-text-snow.svg" alt="spark-snow-logo" />
              </a>
            </li>
            {/* Left-Middle Section for category links */}
            <li className="uk-visible@s">
              <Link href='#'>
                <a className="white home ">Home</a>
              </Link>
            </li>
            <li className="uk-visible@s">
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
            <li className="uk-visible@s">
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
            <li className="uk-visible@s">
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
        <div className="uk-navbar-right ">
          <ul className="uk-navbar-nav ">
            <li className="uk-visible@s">
              {/* user mail */}
              <Link href="/user-mail">
                <a className="white bg-snow">
                  <span className="notification-bubble">110</span>
                  <i className="fal fa-envelope"></i>
                  <span className="notification-status"/>
                </a>
              </Link>
            </li>
            <li className="uk-visible@s">
              {/* user notification */}
              <Link href="/user-notification">
                <a className="white bg-snow">
                  <span className="notification-bubble">110</span>
                  <i className="fal fa-bell"></i>
                  <span className="notification-status"/>
                </a>
              </Link>
            </li>
            <li className="uk-visible@s">
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
            {/* Mobile */}
            <li>
              <Link href="#offcanvas1">
                <a className="uk-navbar-toggle white uk-hidden@s" uk-navbar-toggle-icon="true" uk-toggle="target: #offcanvas1"></a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="offcanvas1" className="uk-offcanvas" uk-offcanvas="mode: push; flip: true">

        <div className="uk-offcanvas-bar bg-white">
          <ul className="uk-nav uk-nav-default">
            <li className="uk-active">
              <a href="#" >
                <img src="/images/logo/spark-text-carbon.svg" alt="spark-snow-logo" className="offcanvas-logo" />
              </a>
            </li>
            <li>
              <Link href='#'>
                <a className="black home ">Home</a>
              </Link>
            </li>
            <li className="uk-parent">
              <a className="black" uk-toggle="target: #toggle-animation; mode:click" >Cohorts</a>
              <ul className="uk-nav-sub" id="toggle-animation" hidden >
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
            </li>
            <li className="uk-parent">
              <a className="black" uk-toggle="target: #toggle-animation2; mode:click" >Blog</a>
              <ul className="uk-nav-sub" id="toggle-animation2" hidden>
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
            </li>
            <li className="uk-parent">
              <a className="black" uk-toggle="target: #toggle-animation3; mode:click">Contact</a>
              <ul className="uk-nav-sub" id="toggle-animation3" hidden>
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
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Navigation;
