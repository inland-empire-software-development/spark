import React from 'react'
import './Landing.scss';

function Landing(): JSX.Element {

    return (
        <div className="uk-container">
            {/* top background image */}
            <div className="uk-background-secondary uk-light uk-padding uk-panel">
                <img className="uk-h8"></img>
            </div>
            {/* course info */}
            <div className="uk-container course-info">
                <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-default uk-card-body">
                    <div className="uk-grid-divider uk-child-width-expand@l" uk-grid="true">
                        <div className="uk-grid-match uk-child-width-1-4@s" uk-grid="true">
                            <section>
                                <h4>15th</h4>
                                <h5>april</h5>
                                <p>Start date for next cohort.</p>
                            </section>
                            <section>
                                <h4>10</h4>
                                <h5>weeks</h5>
                                <p>Every Saturday. 12:00 PM - 3:00 PM</p>
                            </section>
                            <section>
                                <h4>15</h4>
                                <h5>seats</h5>
                                <p>Limited number of seats</p>
                            </section>
                            <section>
                                <h4>100%</h4>
                                <h5>scholarships</h5>
                                <p>Apply for a full scholoarship.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <hr />
                {/* course program */}
                <div>
                    <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-default uk-card-body">
                        <div className="uk-grid-divider uk-width-expand@l" uk-grid="true">
                            <div className="uk-grid-match uk-child-width-1-4@s" uk-grid="true">
                                {/* course program details */}
                                <section>
                                    <h2>Course Program</h2>
                                    <p>Learn more about the details of our upcoming programs. </p>
                                </section>
                                <section>
                                    <h3>24th</h3>
                                    <h4>June</h4>
                                    <p>Every Saturday. 12:00 PM - 3:00 PM</p>
                                </section>
                                <section>
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
                <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                </div>
            </div>
            {/* Venue */}
            <div className="uk-child-width-1-2@s uk-dark" uk-grid>
                <div>
                    {/* Background image left  */}
                    <div className="uk-background-contain uk-background-secondary uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle">
                        Venue image
                    </div>
                    {/* Venue description right */}
                    <div className="uk-background-contain uk-background-muted uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle">
                        <p className="uk-h4">Venue</p>
                    </div>
                </div>
            </div>
            {/* Random quote */}
            <div className="uk-container">
                <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-card-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                </div>
            </div>
            {/* Program */}
            <div className="uk-child-width-1-2@s uk-dark" uk-grid>
                <div>
                    {/* Program description left */}
                    <div className="uk-background-contain uk-background-muted uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle">
                        <p className="uk-h4">Spark program is a community driven learning program....</p>
                    </div>
                    {/* Background image right */}
                    <div className="uk-background-contain uk-background-secondary uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle">
                        Program image
                        <button className="uk-button uk-button-default">Request Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
