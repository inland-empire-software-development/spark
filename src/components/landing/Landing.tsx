import React from 'react';
import './Landing.scss';

function Landing(): JSX.Element {
  return (
    <div className="landing-page">
      {/* top background image */}
      <div className="uk-background-secondary uk-light uk-padding uk-panel uk-height-small top-image">
        <img className="uk-h8"></img>
      </div>
      {/* course info */}
      <div className="course-info">
        <div className="uk-margin-auto uk-width-3-4@m uk-widthuk-card uk-card-default uk-card-body course-info-description">
          <div className="uk-grid-collapse uk-grid-match uk-child-width-1-4@l uk-child-width-1-2@m" data-uk-grid="true">
            <section className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">15th</h4>
              <h5 className="black course-info-mid">april</h5>
              <p className="black course-info-bottom">Start date for next cohort.</p>
            </section>
            <section className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">10</h4>
              <h5 className="black course-info-mid">weeks</h5>
              <p className="black course-info-bottom">Every Saturday. 12:00 PM - 3:00 PM</p>
            </section>
            <section className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">15</h4>
              <h5 className="black course-info-mid">seats</h5>
              <p className="black course-info-bottom">Limited number of seats</p>
            </section>
            <section className="uk-margin-remove bg-primary course-info-section">
              <h4 className="white course-info-top">100%</h4>
              <h5 className="black course-info-mid">scholarships</h5>
              <p className="white course-info-bottom">Apply for a full scholoarship.</p>
            </section>
          </div>
        </div>
        {/* course program */}
        <div className="course-program light-gray">
          <div className="uk-margin-auto uk-width-3-4@m uk-card uk-card-default uk-card-body course-program-description">
            <div className="uk-child-width-expand@l" data-uk-grid="true">
              {/* course program description */}
              <div className="uk-grid-match uk-child-width-1-4@s uk-height-small" data-uk-grid="true">
                <section className="uk-align-center uk-margin-remove course-program-section-1">
                  <h4 className="course-program-header">Course Program</h4>
                  <p className="black course-program-header-detail">Learn more about the details of our upcoming programs. </p>
                </section>
                <section className="uk-align-center uk-margin-remove course-program-section-2">
                  <h4 className="primary course-program-date-header">24th</h4>
                  <h5 className="course-program-date">June</h5>
                  <p className="course-program-time">Every Saturday. 1:00 PM - 3:00 PM</p>
                </section>
                <hr className="uk-divider-vertical" />
                {/* Need uk-grid-divider  */}
                <section className="uk-align-center uk-margin-remove  uk-child-width-expand@l course-program-section-3">
                  <h4 className="black course-program-detail">React Fundamentals:</h4>
                  <ul className="course-program-detail-list">
                    <li className="light-gray">
                                            Basics of React
                    </li>
                    <li className="light-gray">
                                            Breakdown of the library
                    </li>
                    <li className="light-gray">
                                            Creating websites with the library
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Student quote || or none?? */}

      <div className="uk-card uk-card-default uk-card-body uk-flex uk-flex-column uk-flex-center student-quote-section">
        <div className="uk-margin-large-bottom uk-margin-large-top">
          <p className="uk-text-center student-quote black uk-margin-auto">&quot;This program changed my life. Oh em gee. The instructor is amazing and the students are all passionate.&quot;</p>
          <p className="uk-text-center student black uk-margin-auto">-Cutie Pie, Student</p>
        </div>
      </div>


      {/* Venue */}
      <div className="uk-grid-collapse uk-child-width-1-2@l uk-text-center venue-section" data-uk-grid="true">
        {/* Background image left  */}
        <div className="uk-background-contain uk-background-secondary uk-padding venue-image">
          <img src="" alt="Venue Image" />
        </div>

        {/* Venue description right */}

        <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-text-left venue-body">
          <h4 className="venue-title black">Venue</h4>
          <p className="venue-description black">Our program will take place at one of the fastest growing incubators in the city of Riverside. It can host large meetings, be used as a co-hosting space, and is at the center of the bustling city.</p>
          <p className="venue-street-address black">3499 Tenth St.</p>
          <p className="venue-county-state black">Riverside, CA 92501</p>
        </div>

      </div>
      {/* Random quote */}

      <div className="uk-card uk-card-default uk-card-body random-quote-section bg-light-gray">
        <p className="uk-margin-auto uk-margin-large-top uk-margin-large-bottom uk-text-center white random-quote">&quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot; - Malcom X</p>
      </div>


      {/* Program */}
      <div className="uk-contianer">
        <div className="uk-grid-collapse uk-child-width-1-2@l uk-text-center program-section" data-uk-grid="true">
          <div>
            {/* Program description left */}
            <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-text-left uk-text-right@l program-body">
              <h4 className="program-title">Program</h4>
              <p className="program-description black">Spark program is a community driven learning program that provides students a working set of skills to get started building useful applications. Our courses are realistically designed and we make no false promises.</p>
              <button className="uk-button uk-button-default request-button bg-primary white">Request Information</button>
            </div>
          </div>
          {/* Background image right  */}
          <div className="uk-background-contain uk-background-secondary uk-padding program-image">
            <img src="" alt="Program Image" />
          </div>

        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <p className="copywrite">&copy; 2020 Spark.</p>
        <p className="footer-description">An open source LMS project</p>
      </div>
    </div>
  );
}

export default Landing;
