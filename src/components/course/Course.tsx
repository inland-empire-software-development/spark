import React from "react";
import "./Course.scss";

function Course(): JSX.Element {
  return (
    <div className="grid w-100 uk-margin-large-bottom">
      <div className="w-20">
        <img className="uk-responsive-width" src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
      </div>

      <div className="w-75">
        <p className="course-author uk-margin-remove ">Armand Villanueva</p>
        <div className="uk-flex uk-margin-small-bottom'">
          <h3 className="uk-margin-remove course-title">Introduction to Web Development</h3>
          <div>
            <span className='uk-label uk-label-success uk-margin-small-left course-status'>
              Enrolled
            </span>
          </div>
        </div>
        <p className='uk-margin-small-top uk-margin-small-bottom course-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="uk-flex uk-margin-small-top course-details">
          <div>
            <i className="fal fa-user"></i>
            <span className='uk-margin-small-left'>1594</span>
          </div>
          <div className="uk-margin-small-left">
            <i className="fal fa-comment-alt-lines uk-margin-small-left"></i>
            <span className='uk-margin-small-left'>24</span>
          </div>
          <div className="uk-margin-small-left">
            <span className="uk-margin-small-left">
              <i className="fas fa-star yellow"></i>
              <i className="fas fa-star yellow"></i>
              <i className="fas fa-star yellow"></i>
              <i className="fas fa-star yellow"></i>
              <i className="far fa-star yellow"></i>
              <span className="uk-margin-small-left">(4)</span>
            </span>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Course;
