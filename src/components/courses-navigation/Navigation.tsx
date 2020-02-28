import React from "react";
import './Navigation.scss';

function Navigation(): JSX.Element {
  return (
    <>


      <div className="w-100 grid">
        <span className="courses-title w-55">All Courses</span>

        <div className="w-20">
          <select className="uk-select">
            <option>Newly Published</option>
            <option>Canceled</option>
          </select>
        </div>


        <div className="w-20">
          <form className="uk-search uk-search-default w-100">
            <a href="" className="uk-search-icon-flip" uk-search-icon="true"></a>
            <input className="uk-search-input" type="search" placeholder="Search courses..." />
          </form>
        </div>

        <hr className="w-100 courses-divider"/>
      </div>

    </>
  );
}

export default Navigation;
