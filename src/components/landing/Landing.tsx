import React from 'react';
import './Landing.scss';
import CourseProgramCard, {CourseProgramProps} from './CourseProgramCard';

export interface LandingProps {
  coverImage: string;
  venueImage: string;
  programImage: string;
  cohortInfo: {
    startDay: string;
    startMonth: string;
    durationWeeks: number;
    classTimeString: string;
    seats: number;
  };
  courses: CourseProgramProps[];
  studentQuote: string;
  studentQuoteAuthor: string;
  venueDescription: string;
  venueAddress: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
  };
  programDescription: string;
  inspirationalQuote: string;
  inspirationalQuoteAuthor: string;
}


const Landing: React.FC<LandingProps> = (props) => {
  return (
    <div className="landing-page">
      {/* top background image */}
      <div className="uk-background-secondary uk-light uk-padding uk-panel uk-cover-container uk-height-small top-image">
        <img src={props.coverImage} data-uk-cover></img>
      </div>
      {/* course info */}
      <section className="course-info">
        <div className="uk-margin-auto uk-width-3-4@m uk-card uk-card-default uk-card-body course-info-description">
          <div className="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-4@l" data-uk-grid>
            <div className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">{props.cohortInfo.startDay}</h4>
              <h5 className="black course-info-mid">{props.cohortInfo.startMonth.toLowerCase()}</h5>
              <p className="black course-info-bottom">Start date for next cohort.</p>
            </div>
            <div className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">{props.cohortInfo.durationWeeks}</h4>
              <h5 className="black course-info-mid">weeks</h5>
              <p className="black course-info-bottom">{props.cohortInfo.classTimeString}</p>
            </div>
            <div className="uk-margin-remove course-info-section">
              <h4 className="primary course-info-top">{props.cohortInfo.seats}</h4>
              <h5 className="black course-info-mid">seats</h5>
              <p className="black course-info-bottom">Limited number of seats</p>
            </div>
            <div className="uk-margin-remove bg-primary course-info-section">
              <h4 className="white course-info-top">100%</h4>
              <h5 className="black course-info-mid">scholarships</h5>
              <p className="white course-info-bottom">Apply for a full scholoarship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* course program */}
      <section className="course-program uk-margin-auto uk-width-3-4@m ">
        {/* course program description */}
        <div className="uk-grid-medium@m course-program-description" data-uk-grid>
          <div className="uk-width-1-4@l uk-text-center uk-text-left@m course-program-label">
            <h4 className="course-program-header">Course Program</h4>
            <p className="black course-program-header-detail">Learn more about the details of our upcoming programs.</p>
          </div>
          <div className="uk-width-3-4@l course-program-card">
            <div data-uk-slider>
              <div className="uk-position-relative uk-visible-toggle uk-dark" data-tabindex="-1">
                <ul className="uk-slider-items uk-child-width-1-1 uk-grid">
                  {props.courses.map((course) => (
                    <li key={course.id} >
                      <CourseProgramCard {...course} />
                    </li>) )}
                </ul>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
              </div>
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student quote || or none?? */}

      <section className="uk-card uk-card-default uk-card-body uk-flex uk-flex-column uk-flex-center student-quote-section">
        <div className="uk-margin-large-bottom uk-margin-large-top">
          <p className="uk-text-center student-quote black uk-margin-auto">&quot;{props.studentQuote}&quot;</p>
          <p className="uk-text-center student black uk-margin-auto">-{props.studentQuoteAuthor}</p>
        </div>
      </section>


      {/* Venue */}
      <section className="uk-grid-collapse uk-child-width-1-2@l uk-text-center venue-section" data-uk-grid>
        {/* Background image left  */}
        <div className="uk-background-contain uk-background-secondary uk-padding uk-cover-container venue-image">
          <img src={props.venueImage} alt="Venue Image" data-uk-cover />
        </div>

        {/* Venue description right */}

        <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-text-left venue-body">
          <h4 className="venue-title black">Venue</h4>
          <p className="venue-description black">{props.venueDescription}</p>
          <p className="venue-street-address black">{props.venueAddress.street1}</p>
          {props.venueAddress.street2 && <p className="venue-street-address black">{props.venueAddress.street2}</p>}
          <p className="venue-county-state black">{props.venueAddress.city}, {props.venueAddress.state} {props.venueAddress.zip}</p>
        </div>

      </section>
      {/* Random quote */}

      <section className="uk-card uk-card-default uk-card-body random-quote-section bg-light-gray">
        <p className="uk-margin-auto uk-margin-large-top uk-margin-large-bottom uk-text-center white random-quote">{props.inspirationalQuote}&quot; - {props.inspirationalQuoteAuthor}</p>
      </section>


      {/* Program */}
      <section className="uk-grid-collapse uk-child-width-1-2@l uk-text-center program-section" data-uk-grid>
        <div>
          {/* Program description left */}
          <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-text-left uk-text-right@l program-body">
            <h4 className="program-title">Program</h4>
            <p className="program-description black">{props.programDescription}</p>
            <button className="uk-button uk-button-default uk-align-center uk-align-right@l request-button bg-primary white">Request Information</button>
          </div>
        </div>
        {/* Background image right  */}
        <div className="uk-background-contain uk-background-secondary uk-flex-first uk-flex-last@l program-image uk-cover-container">
          <img src={props.programImage} alt="Program Image" data-uk-cover/>
        </div>
      </section>

      {/* footer */}
      <section className="footer">
        <p className="copywrite">&copy; 2020 Spark.</p>
        <p className="footer-description">An open source LMS project</p>
      </section>
    </div>
  );
};

export default Landing;
