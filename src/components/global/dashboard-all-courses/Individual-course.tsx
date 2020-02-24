import React from "react";

function IndividualCourse(): JSX.Element {
  return (
    <div className="course-flex uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div id="course-img" className="uk-card-media-left uk-cover-container">
        <img className="uk-border-rounded uk-responsive-width" src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" uk-cover />
        <canvas width="10" height="10"></canvas>
      </div>
      <div id="course-description-section-container">
        <div className="uk-card-body card-width">
          <h3 className="uk-card-title">Jay-Z</h3>
          <div className="uk-flex uk-margin-small-top uk-margin-large-bottom'">
            <div>Intro to Rap</div>
            <div><button className='uk-margin-small-left uk-background-primary'>Enrolled</button></div>
          </div>
          <p className='uk-margin-small-top uk-margin-medium-bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
    </div>
  );
}

export default IndividualCourse;
