import React from 'react'
import './Landing.scss';

function Landing(): JSX.Element {

    return (
        <div className="uk-container">
            {/* top background image */}
            <div className="uk-background-secondary uk-light uk-padding uk-panel uk-height-small">
                <img className="uk-h8"></img>
            </div>
            {/* course info */}
            <div className="uk-container course-info">
                <div className="uk-margin-auto uk-width-2-3@s uk-card uk-card-default uk-card-body course-info-description">
                    <div className="uk-child-width-expand@l" uk-grid="true">
                        <div className="uk-grid-match uk-child-width-1-4@s uk-height-small course-info-section" uk-grid="true">
                            <section className="uk-align-center uk-margin-remove course-info-section-1">
                                <h4 className="Heavy primary course-info-top">15th</h4>
                                <h5 className="Medium black course-info-mid">april</h5>
                                <p className="Light black course-info-bottom">Start date for next cohort.</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove course-info-section-2">
                                <h4 className="Heavy primary course-info-top">10</h4>
                                <h5 className="Medium black course-info-mid">weeks</h5>
                                <p className="Light black course-info-bottom">Every Saturday. 12:00 PM - 3:00 PM</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove course-info-section-3">
                                <h4 className="Heavy primary course-info-top">15</h4>
                                <h5 className="Medium black course-info-mid">seats</h5>
                                <p className="Light black course-info-bottom">Limited number of seats</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove bg-primary course-info-section-4">
                                <h4 className="Heavy white course-info-top">100%</h4>
                                <h5 className="Medium black course-info-mid">scholarships</h5>
                                <p className="Light white course-info-bottom">Apply for a full scholoarship.</p>
                            </section>
                        </div>
                    </div>
                </div>
                {/* course program */}
                <div className="uk-container course-program light-gray">
                    <div className="uk-margin-auto uk-width-2-3@s uk-card uk-card-default uk-card-body course-program-description">
                        <div className="uk-child-width-expand@l" uk-grid="true">
                            {/* course program description */}
                            <div className="uk-grid-match uk-child-width-1-4@s uk-height-small" uk-grid="true">
                                <section className="uk-align-center uk-margin-remove course-program-section-1">
                                    <h4 className="black course-program-header">Course Program</h4>
                                    <p className="Book black course-program-header-detail">Learn more about the details of our upcoming programs. </p>
                                </section>
                                <section className="uk-align-center uk-margin-remove course-program-section-2">
                                    <h4 className="Heavy primary course-program-date-header">24th</h4>
                                    <h5 className="Book course-program-date">June</h5>
                                    <p className="Light black course-program-time">Every Saturday. 12:00 PM - 3:00 PM</p>
                                </section>
                                {/* Need uk-grid-divider  */}
                                <section className="uk-align-center uk-margin-remove  uk-child-width-expand@l course-program-section-3">
                                    <h4 className="Medium black course-program-detail">React Fundamentals:</h4>
                                    <ul className="Light black course-program-detail-list">
                                        <li>
                                            Basics of React
                                        </li>
                                        <li>
                                            Breakdown of the library
                                        </li>
                                        <li>
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
            <div className="uk-container">
                <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-height-small">
                    <p className="uk-position-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                </div>
            </div>
            {/* Venue */}
            <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid="true">
                {/* Background image left  */}
                <div>
                    <div className="uk-background-contain uk-background-secondary uk-padding uk-height-small">Venue Image</div>
                </div>
                {/* Venue description right */}
                <div>
                    <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body">
                        <h4 className="uk-position-left">Venue</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                    </div>
                </div>
            </div>
            {/* Random quote */}
            <div className="uk-container">
                <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body uk-height-small">
                    <p className="uk-position-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                </div>
            </div>

            {/* Program */}
            <div className="uk-contianer">

                <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid="true">
                    <div>
                        {/* Program description left */}
                        <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body">
                            <h4 className="uk-position-right">Program</h4>
                            <p>Spark program is a community driven learning program....</p>
                            <button className="uk-button uk-button-small uk-button-default">Request Information</button>
                        </div>
                    </div>
                    {/* Background image right  */}
                    <div>
                        <div className="uk-background-contain uk-background-secondary uk-padding uk-height-small">
                            Program Image
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
