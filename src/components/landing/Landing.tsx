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
                <div className="uk-margin-auto uk-width-2-3@s uk-card uk-card-default uk-card-body">
                    <div className="uk-child-width-expand@l" uk-grid="true">
                        <div className="uk-grid-match uk-child-width-1-4@s uk-height-small" uk-grid="true">
                            <section className="uk-align-center uk-margin-remove">
                                <h4>15th</h4>
                                <h5>april</h5>
                                <p>Start date for next cohort.</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove">
                                <h4>10</h4>
                                <h5>weeks</h5>
                                <p>Every Saturday. 12:00 PM - 3:00 PM</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove">
                                <h4>15</h4>
                                <h5>seats</h5>
                                <p>Limited number of seats</p>
                            </section>
                            <section className="uk-align-center uk-margin-remove">
                                <h4>100%</h4>
                                <h5>scholarships</h5>
                                <p>Apply for a full scholoarship.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <hr />
                {/* course program */}
                <div className="contianer">
                    <div className="uk-margin-auto uk-margin-auto-vertical uk-width-2-3@s uk-card uk-card-default uk-card-body">
                        <div className="uk-grid-divider uk-width-expand@l" uk-grid="true">
                            <div className="uk-grid-match uk-child-width-1-4@s uk-height-small" uk-grid="true">
                                {/* course program details */}
                                <section className="uk-align-center uk-margin-remove uk-text-center">
                                    <h4>Course Program</h4>
                                    <p>Learn more about the details of our upcoming programs. </p>
                                </section>
                                <section className="uk-align-center uk-margin-remove uk-text-center">
                                    <h4>24th</h4>
                                    <h5>June</h5>
                                    <p>Every Saturday. 12:00 PM - 3:00 PM</p>
                                </section>
                                <section className="uk-align-center uk-margin-remove uk-text-center">
                                    {/* Map through lists */}
                                    React Fundamentals:
                                    <ul>
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
                                    {/* Pagination?? */}
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
