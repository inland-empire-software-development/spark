// render projects page.
function Projects(): JSX.Element {
  return (
    <section id="projects" className="uk-width-1-3 ">
      <section uk-slider="" className="uk-slider">
        <section className="uk-position-relative">
          <section className="uk-slider-container uk-light">
            <ul id="project-slider"
              className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid uk-padding-small uk-margin-auto"
              data-style="transform: translate3d(-175px, 0px, 0px);"
            >
              <li data-tabindex="-1" className="" data-style="order: 1;">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
              <li data-tabindex="-1" className="">
                <section className="uk-card uk-card-default">
                  <section className="uk-card-media-top">
                    <section className="porject-preview"></section>
                  </section>
                  <section className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                </section>
              </li>
            </ul>
          </section>

          <section className="uk-hidden@s uk-light">
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
          </section>

          <section className="uk-visible@s">
            <a
              className="uk-position-center-left-out uk-position-large uk-icon uk-slidenav-previous uk-slidenav"
              href="#"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            >
            </a>
            <a
              className="uk-position-center-right-out uk-position-small uk-icon uk-slidenav-next uk-slidenav"
              href="#"
              uk-slidenav-next=""
              uk-slider-item="next"
            >
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Projects;
