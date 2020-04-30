import React, { FormEvent } from "react";
import "./AddCourse.scss";

function AddCourse(): JSX.Element {
  const submitData: Function = (event: FormEvent<HTMLFormElement>) => {
    const courseTitle = document.getElementById(
      "courseTitle"
    ) as HTMLInputElement;
    const cohortID = document.getElementById("cohortID") as HTMLInputElement;
    const courseStart = document.getElementById(
      "courseStart"
    ) as HTMLInputElement;
    const courseExpire = document.getElementById(
      "courseExpire"
    ) as HTMLInputElement;
    const courseDescription = document.getElementById(
      "courseDescription"
    ) as HTMLInputElement;
    // console.log(courseTitle.value);
    // console.log(cohortID.value);
    // console.log(courseStart.value);
    // console.log(courseExpire.value);
    // console.log(courseDescription.value);
    const userInfo = {
      courseTitle: courseTitle.value,
      cohortID: cohortID.value,
      courseStart: courseStart.value,
      courseExpire: courseExpire.value,
      courseDescription: courseDescription.value,
    };

    fetch("/api/course/add", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });

    event.preventDefault();
  };

  return (
    <section className="uk-container">
      <section className="uk-grid">
        <section className="uk-width-1-1 uk-first-column">
          <section className="dashTitle">
            <h1 className="page-title">Add Course</h1>
          </section>
          <h3 className="page-title">Basic info</h3>
          <form id="sendInfo" onSubmit={(e) => submitData(e)}>
            <section className="uk-form-horizontal">
              <section className="uk-margin uk-grid">
                <section className="uk-width-1-1 uk-width-1-2@s uk-margin-bottom">
                  <label className="uk-form-label" htmlFor="Course Title">
                    Course Title{" "}
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    id="courseTitle"
                    name="Course Title"
                  />
                </section>
                <section className="uk-width-1-1 uk-width-1-2@s uk-margin-bottom">
                  <label className="uk-form-label" htmlFor="Cohort ID">
                    Cohort ID{" "}
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    id="cohortID"
                    name="Cohort ID"
                  />
                </section>
              </section>
              <section className="uk-margin uk-grid">
                <section className="uk-width-1-1 uk-width-1-2@s uk-margin-bottom">
                  <label className="uk-form-label" htmlFor="Course start">
                    Course Start{" "}
                  </label>
                  <input
                    type="date"
                    className="uk-input"
                    id="courseStart"
                    data-date-inline-picker="true"
                    name="Course Start"
                  />
                </section>
                <section className="uk-width-1-1 uk-width-1-2@s uk-margin-bottom">
                  <label className="uk-form-label" htmlFor="Course expire">
                    Course End{" "}
                  </label>
                  <input
                    type="date"
                    className="uk-input"
                    id="courseExpire"
                    data-date-inline-picker="true"
                    name="Course End"
                  />
                </section>
              </section>
              <section className="uk-margin uk-grid">
                <section className="uk-width-1-1 uk-width-1-2@s">
                  <label className="uk-form-label" htmlFor="Instructor">
                    Instructor{" "}
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    id="instructor"
                    name="Instructor"
                  />
                </section>
                <section className="uk-width-1-2 "></section>
              </section>

              {/* drop and drag files */}
              <section className="uk-margin uk-grid">
                <section className="uk-width-1-1">
                  <label
                    id="course-picture"
                    className="uk-form-label"
                    htmlFor="Course Picture"
                  >
                    Course picture
                  </label>
                  <section className="js-upload uk-placeholder uk-text-center uk-height-small">
                    <span uk-icon="icon: cloud-upload"></span>
                    <span className="uk-text-middle">
                      {" "}
                      Attach images by dropping them here or{" "}
                    </span>
                    <section className="uk-form-custom">
                      <input type="file" multiple name="test" />
                      <span className="uk-link">selecting one</span>
                    </section>
                  </section>
                  <progress
                    id="js-progressbar"
                    className="uk-progress"
                    value="0"
                    max="100"
                    hidden
                  ></progress>
                </section>
              </section>
            </section>

            <h2>Description</h2>
            <section className="uk-form-horizontal">
              <section className="uk-margin uk-grid">
                <section className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m">
                  <label className="uk-form-label" htmlFor="Category">
                    Category
                  </label>
                  <select className="uk-select">
                    <option>Programming Web Beginner</option>
                    <option>Lloan buddie</option>
                  </select>
                </section>
                <section className="uk-width-1-2@s uk-width-2-3@m"></section>
              </section>
              <section className="uk-margin uk-grid">
                <section className="uk-width-1">
                  <label className="uk-form-label" htmlFor="Course description">
                    Course Description{" "}
                  </label>
                  <textarea
                    className="uk-textarea"
                    id="courseDescription"
                    rows={5}
                  ></textarea>
                </section>
              </section>
              <section className="w-100">
                <button
                  className="w-100 uk-button uk-button-default saveButton"
                  type="submit"
                >
                  {" "}
                  Save
                  <i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                </button>
              </section>
            </section>

            {/* TODO: implment video section where instructors can add url. Html Code is down below */}
            {/* <h2>Video</h2>
          <section className='uk-form-horizontal'>
            <section className="grid uk-flex-bottom">
              <section className="w-20">
                <label className='uk-form-label' htmlFor="Video Name">Video Name </label>
                <input type="text" className="uk-input" id='videoName' name="Video Name" />
              </section>
              <section className="w-30">
                <label className='uk-form-label' htmlFor="Video Category">Video Category </label>
                <input type="text" className="uk-input" id='videoCategory' name="First Name" />
              </section>
              <section className="w-40">
                <label className='uk-form-label' htmlFor="Video URL">Video URL </label>
                <input type="text" className="uk-input" id='videoURL' name="Video Name" />
              </section>
              <section id="remove-video" className="w-5 ">
                <button className="w-100 uk-button bg-red white" type='button'>
                  <i className="fal fa-trash" />
                </button>
              </section>
            </section>
            <section className='uk-margin grid'>
              <section className='w-20'>
                <button className="w-100 uk-button uk-button-default" type="button">Add Item</button>
              </section>
            </section>
            <section className='uk-margin grid'>
              <section className='w-20'>
                <button className="w-100 uk-button uk-button-default saveButton" type="button"> Save
                  <i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                </button>
              </section>
            </section>
          </section> */}
          </form>
        </section>
      </section>
    </section>
  );
}

export default AddCourse;
