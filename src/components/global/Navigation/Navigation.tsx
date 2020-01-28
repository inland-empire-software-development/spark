import React from 'react';
import './Navigation.scss';

function Navigation(): JSX.Element {
  return (
    <nav id="global-nav" className="uk-navbar-container gradient-background" uk-navbar="true">
      <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
          <li className="uk-active"><a href="#">Active</a></li>
          <li>
            <a href="#">Parent</a>
          </li>
          <li><a href="#">Item</a></li>
        </ul>

      </div>
      <div className="uk-navbar-right">

        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Parent</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
