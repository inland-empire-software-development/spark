import React from "react";
import "./Slider.scss";
// render Slider page.

function Slider(): JSX.Element {
  return (
    <section id="slider" className="uk-width-1-3 ">
      <h2 className="uk-flex uk-flex-center">Projects by AndyMendez</h2>
      <div uk-slider="" className="uk-slider">
        <div className="uk-position-relative">
          <div className="uk-slider-container uk-light slider-spacing">
            <ul id="project-slider"
              className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid "
              data-style="transform: translate3d(-175px, 0px, 0px);"
            >
              <li data-tabindex="-1" className="" data-style="order: 1;">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li data-tabindex="-1" className="">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <div className="porject-preview"></div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="uk-hidden@s uk-light">
            <a
              className="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav"
              href="#"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            >
            </a>
            <a
              className="uk-position-center-right uk-position-small uk-icon uk-slidenav-next uk-slidenav"
              href="#"
              uk-slidenav-next=""
              uk-slider-item="next"
            >
            </a>
          </div>

          <div className="uk-visible@s">
            <a
              className="uk-position-center-left-out uk-position-large uk-icon uk-slidenav-previous uk-slidenav uk-card uk-card-default"
              href="#"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            >
            </a>
            <a
              className="uk-position-center-right-out uk-position-small uk-icon uk-slidenav-next uk-slidenav uk-card uk-card-default"
              href="#"
              uk-slidenav-next=""
              uk-slider-item="next"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
