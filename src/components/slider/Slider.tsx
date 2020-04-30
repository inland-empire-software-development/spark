import React from "react";
import "./Slider.scss";
//  render Slider page.

function Slider(): JSX.Element {
  return (
    <section id="slider" className="uk-margin-medium-top">
      <section className="uk-container">
        {/* <section className="uk-grid"> */}
        <section className="uk-text-center">
          <h2 className="uk-flex uk-flex-center uk-padding-large uk-width-1-2 uk-margin-auto font26 medium-family">
              Projects by AndyMendez
          </h2>
          {/* slider */}
          <section uk-slider="" className="uk-slider uk-margin-large-bottom uk-margin-auto uk-width-5-6@l">
            <section className="uk-position-relative uk-visible-toggle">
              <section className="uk-slider-container ">
                {/* how many slide per viewport size */}
                <ul
                  id="project-slider"
                  className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid"
                  data-style="transform: translate3d(-175px, 0px, 0px);"
                  data-uk-grid
                >
                  {/* every slide */}
                  <li data-tabindex="-1" className="" data-style="order: 1;">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                  <li data-tabindex="-1" className="">
                    <section className="uk-card uk-card-default">
                      <section className="uk-card-media-top">
                        <section className="project-preview"></section>
                      </section>
                      <section className="card-body">
                        <h6 className="uk-text-muted font14 book-family">React</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                      </section>
                      <hr className="hr-slider" />
                      <section className="card-body"></section>
                    </section>
                  </li>
                </ul>
              </section>
              {/* Inner buttons */}
              <section className="uk-hidden@l uk-light">
                <a
                  id="prev-slide"
                  className="uk-position-center-left uk-position-small uk-icon uk-slidenav uk-slidenav uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <div>&#8592;</div>
                </a>
                <a
                  id="next-slide"
                  className="uk-position-center-right uk-position-small uk-icon uk-slidenav uk-slidenav uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <div>&#8594;</div>
                </a>
              </section>
              {/* outer buttons */}
              <section className="uk-visible@l">
                <a
                  id="prev-slide"
                  className="uk-position-center-left-out uk-position-large uk-icon uk-slidenav uk-slidenav uk-card uk-card-default"
                  href="#"
                  uk-slider-item="previous"
                >
                  <div>&#8592;</div>
                </a>
                <a
                  id="next-slide"
                  className="uk-position-center-right-out uk-position-large uk-icon uk-slidenav uk-slidenav uk-card uk-card-default"
                  href="#"
                  uk-slider-item="next"
                >
                  <div>&#8594;</div>
                </a>
              </section>
            </section>
          </section>
        </section>
        {/* </section> */}
      </section>
    </section>
  );
}

export default Slider;
