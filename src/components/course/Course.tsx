import React from "react";
import "./Course.scss";

function Course(): JSX.Element {
  return (
    <div className="grid w-100 uk-margin-large-bottom">
      <div className="w-20">
        <img className="uk-responsive-width" src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" uk-cover />
      </div>

      <div className="w-75">
        <h3 className="uk-margin-remove course-title">Introduction to Web Development</h3>
        <div className="uk-flex uk-margin-small-bottom'">
          <p className="course-author">Armand Villanueva</p>
          <div>
            <span className='uk-label uk-label-success uk-margin-small-left'>
              Enrolled
            </span>
          </div>
        </div>
        <p className='uk-margin-small-top uk-margin-small-bottom course-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="uk-flex uk-margin-small-top">
          <div>
            <span uk-icon="icon: users"></span>
            <span className='uk-margin-small-left'>1594</span>
          </div>
          <div>
            <span className='uk-margin-small-left' uk-icon="icon: comments"></span>
            <span className='uk-margin-small-left'>24</span>
          </div>
          <div>
            <span className=" uk-margin-small-left uk-icon-link uk-text-warning" uk-icon="star"></span>
            <span className="uk-icon-link uk-text-warning" uk-icon="star"></span>
            <span className="uk-icon-link uk-text-warning" uk-icon="star"></span>
            <span className="uk-icon-link uk-text-warning" uk-icon="star"></span>
            <span className="uk-icon-link uk-text-warning" uk-icon="star"></span>
            <span>(5)</span>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Course;
