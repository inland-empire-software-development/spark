import React from 'react';
import './AddCourse.scss';


function AddCourse(): JSX.Element {
  return (
    <div className='uk-grid'>
      <div className='uk-width-6@s uk-first-column'>
        <div className='dashTitle'>
          <h1 className='page-title'>Add Course</h1>
        </div>
        <h3 className='page-title'>Basic info</h3>
        <form className='uk-form-horizontal'>
          <div className="uk-margin uk-grid">
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Course Title">Course Title </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Cohort ID">Cohort ID </label>
              <input type="text" className="uk-input" name="lastName" />
            </div>
          </div>
          <div className="uk-margin uk-grid">
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Course start">Course Start </label>
              <input type="date" className="uk-input" data-date-inline-picker="true" name="firstName" />
            </div>
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Course expire">Course End </label>
              <input type="date" className="uk-input" data-date-inline-picker="true" name="lastName" />
            </div>
          </div>
          <div className="uk-margin uk-grid">
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Instructor">Instructor </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
          </div>
          <form>
            <div className="uk-margin uk-grid">
              <div className="uk-width-1">
                <label className='uk-form-label' htmlFor="Course Picture">Course picture</label>

                {/* drop and drag files */}
                <div className="js-upload uk-placeholder uk-text-center">
                  <span uk-icon="icon: cloud-upload"></span>
                  <span className="uk-text-middle">Attach binaries by dropping them here or</span>
                  <div className='uk-form-custom'>
                    <input type="file" multiple />
                    <span className="uk-link">selecting one</span>
                  </div>
                </div>
                <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden></progress>
              </div>
            </div>
          </form>
        </form>

        <h2>Description</h2>
        <form className='uk-form-horizontal'>
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
              <textarea className="uk-textarea" rows={5} ></textarea>
            </div>
          </div>
        </form>

        <h2>Video</h2>
        <form className='uk-form-horizontal'>
          <div className="grid uk-flex-bottom">
            <div className="w-20">
              <label className='uk-form-label' htmlFor="Video Name">Video Name </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
            <div className="w-30">
              <label className='uk-form-label' htmlFor="Video Category">Video Category </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
            <div className="w-40">
              <label className='uk-form-label' htmlFor="Video URL">Video URL </label>
              <input type="text" className="uk-input" name="firstName" />
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
        </form>
      </div>

    </div>
  );
}

export default AddCourse;
