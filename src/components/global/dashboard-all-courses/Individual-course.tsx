
import React from "react";

function IndividualCourse(): JSX.Element {
  return (
    <div className='individual-course'>
      <div className='information-on-individual-course-container'>
        <div className='course-instructor-name'>Jay-Z</div>
        <div className='course-title-and-status-container'>
          <ul>
            <li>Intro to Rap</li>
            <li><button className='enrolled'>Enrolled</button></li>
          </ul>
        </div>
        <p className='course-description'>
          In this course, you
         will develop the skill set to freestyle rap
         in various styles without running out of bars,
         even if you have never rapped before. This is a bold
         promise, but like anything else, freestyle
         rhyming can be broken down into a few simple steps.
        </p>
        <div className='users-comments-rating-container'>
          <ul className='users-comments-rating'>
            <li>
              <i className="fas fa-user">  1546</i>
            </li>
            <li>
              <i className="far fa-comment-alt">  24</i>
            </li>
            <li className='stars'>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"><span> (5)</span></i>
            </li>
          </ul>
        </div>
      </div>
      <div className='image-edit-buttons-container'>
        <button className='edit-button'>Edit</button>
        <button className="view-button">View</button>
      </div>
      <img src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    </div>
  );
}

export default IndividualCourse;
