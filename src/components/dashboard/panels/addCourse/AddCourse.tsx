import React, {FormEvent} from 'react';
import './AddCourse.scss';


function AddCourse(): JSX.Element {
  const submitData: Function = (event: FormEvent<HTMLFormElement>) => {
    const courseTitle= document.getElementById('courseTitle') as HTMLInputElement;
    const cohortID = document.getElementById('cohortID') as HTMLInputElement;
    const courseStart = document.getElementById('courseStart') as HTMLInputElement;
    const courseExpire = document.getElementById('courseExpire') as HTMLInputElement;
    const courseDescription = document.getElementById('courseDescription') as HTMLInputElement;
    // console.log(courseTitle.value);
    // console.log(cohortID.value);
    // console.log(courseStart.value);
    // console.log(courseExpire.value);
    // console.log(courseDescription.value);
    const userInfo = {
      'courseTitle': courseTitle.value,
      'cohortID': cohortID.value,
      'courseStart': courseStart.value,
      'courseExpire': courseExpire.value,
      'courseDescription': courseDescription.value,
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
    <div className='uk-grid'>
      <div className='uk-width-6@s uk-first-column'>
        <div className='dashTitle'>
          <h1 className='page-title'>Add Course</h1>
        </div>
        <h3 className='page-title'>Basic info</h3>
        <form id='sendInfo' onSubmit={(e) => submitData(e)}>
          <div className='uk-form-horizontal'>
            <div className="uk-margin uk-grid">
              <div className="uk-width-1-2">
                <label className='uk-form-label' htmlFor="Course Title">Course Title </label>
                <input type="text" className="uk-input" id='courseTitle' name="Course Title" />
              </div>
              <div className="uk-width-1-2">
                <label className='uk-form-label' htmlFor="Cohort ID">Cohort ID </label>
                <input type="text" className="uk-input" id='cohortID' name="Cohort ID" />
              </div>
            </div>
            <div className="uk-margin uk-grid">
              <div className="uk-width-1-2">
                <label className='uk-form-label' htmlFor="Course start">Course Start </label>
                <input type="date" className="uk-input" id='courseStart' data-date-inline-picker="true" name="Course Start" />
              </div>
              <div className="uk-width-1-2">
                <label className='uk-form-label' htmlFor="Course expire">Course End </label>
                <input type="date" className="uk-input" id='courseExpire' data-date-inline-picker="true" name="Course End" />
              </div>
            </div>
            <div className="uk-margin uk-grid">
              <div className="uk-width-1-2">
                <label className='uk-form-label' htmlFor="Instructor">Instructor </label>
                <input type="text" className="uk-input" id='instructor' name="Instructor" />
              </div>
            </div>

            {/* drop and drag files */}
            <div className="uk-margin uk-grid">
              <div className="uk-width-1">
                <label className='uk-form-label' htmlFor="Course Picture">Course picture</label>
                <div className="js-upload uk-placeholder uk-text-center">
                  <span uk-icon="icon: cloud-upload"></span>
                  <span className="uk-text-middle"> Attach images by dropping them here or </span>
                  <div className='uk-form-custom'>
                    <input type="file" multiple name='test' />
                    <span className="uk-link">selecting one</span>
                  </div>
                </div>
                <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden></progress>
              </div>
            </div>
          </div>

          <h2>Description</h2>
          <div className='uk-form-horizontal'>
            <div className='uk-margin uk-grid'>
              <div className="uk-width-1">
                <label className='uk-form-label' htmlFor="Category">Category</label>
                <select className="uk-select">
                  <option>Programming Web Beginner</option>
                  <option>Lloan buddie</option>
                </select>
              </div>
            </div>
            <div className="uk-margin uk-grid">
              <div className="uk-width-1">
                <label className='uk-form-label' htmlFor="Course description">Course Description </label>
                <textarea className="uk-textarea" id='courseDescription' rows={5} ></textarea>
              </div>
            </div>
            <div className='w-20'>
              <button className="w-100 uk-button uk-button-default saveButton" type="submit"> Save
                <i className="fas fa-long-arrow-alt-right arrowIcon"></i>
              </button>
            </div>
          </div>

          {/* TODO: implment video section where instructors can add url. Html Code is down below */}
          {/* <h2>Video</h2>
          <div className='uk-form-horizontal'>
            <div className="grid uk-flex-bottom">
              <div className="w-20">
                <label className='uk-form-label' htmlFor="Video Name">Video Name </label>
                <input type="text" className="uk-input" id='videoName' name="Video Name" />
              </div>
              <div className="w-30">
                <label className='uk-form-label' htmlFor="Video Category">Video Category </label>
                <input type="text" className="uk-input" id='videoCategory' name="First Name" />
              </div>
              <div className="w-40">
                <label className='uk-form-label' htmlFor="Video URL">Video URL </label>
                <input type="text" className="uk-input" id='videoURL' name="Video Name" />
              </div>
              <div id="remove-video" className="w-5 ">
                <button className="w-100 uk-button bg-red white" type='button'>
                  <i className="fal fa-trash" />
                </button>
              </div>
            </div>
            <div className='uk-margin grid'>
              <div className='w-20'>
                <button className="w-100 uk-button uk-button-default" type="button">Add Item</button>
              </div>
            </div>
            <div className='uk-margin grid'>
              <div className='w-20'>
                <button className="w-100 uk-button uk-button-default saveButton" type="button"> Save
                  <i className="fas fa-long-arrow-alt-right arrowIcon"></i>
                </button>
              </div>
            </div>
          </div> */}
        </form>
      </div>

    </div>
  );
}

export default AddCourse;
