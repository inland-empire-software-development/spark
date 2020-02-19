/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Link from 'next/link';
import './Navigation.scss';
import User from './User/User';
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
        "uk-parent uk-visible-toggle uk-visible@m" : "uk-visible@m"}>

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


function Navigation(): JSX.Element {
  const navigation: Array<object> = [
    {label: "Home", url: "/"},
    {label: "Cohorts", url: "/cohorts"},
    {label: "Blog", url: "https://www.iesd.com/#blog", target: "_blank"},
    {label: "Contact", url: "mailto:community@iesd.com", target: "_blank"},
  ].map((item) => createListObject(item));

  return (
    <div className="gradient-background">
      <nav className="uk-navbar-container uk-navbar-transparent " uk-navbar="true">
        {/* Left portion for the logo */}
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <li className="uk-active ">
              <a href="#" >
                <img src="/images/logo/spark-text-white.svg" alt="spark-snow-logo" />
              </a>
            </li>
            {
              navigation.map((link) =>
                createListItem(link),
              )
            }
          </ul>
        </div>

        {/* Right portion for user  */}
        <User/>
      </nav>

      <div id="offcanvas-nav" className="uk-offcanvas" uk-offcanvas="mode: push; flip: true">
        <div className="uk-offcanvas-bar bg-white">
          <ul className="uk-nav uk-nav-default">
            <li id="mobile-logo" className="uk-active">
              <User isMobile={true}/>
            </li>
            {
              navigation.map((link) =>
                createListItem(link, true),
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
