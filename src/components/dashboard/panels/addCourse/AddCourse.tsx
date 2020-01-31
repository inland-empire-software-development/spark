import React from 'react';


function addCourse(): JSX.Element {
  return (
    <div className='uk-grid'>

      <div className= 'uk-width-6@s uk-first-column'>
        <div className='dashTitle'>
          <h1>Add Course</h1>
        </div>
        <h2>Basic info</h2>
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
              <label className='uk-form-label' htmlFor="Course start">Course start </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Course expire">Course expire </label>
              <input type="text" className="uk-input" name="lastName" />
            </div>
          </div>
          <div className="uk-margin uk-grid">
            <div className="uk-width-1-2">
              <label className='uk-form-label' htmlFor="Instructor">Instructor </label>
              <input type="text" className="uk-input" name="firstName" />
            </div>
          </div>
          <div className="uk-margin uk-grid">
            <div className="uk-width-1">
              <label className='uk-form-label' htmlFor="Course Picture">Course picture</label>
              <div className="js-upload uk-placeholder uk-text-center">
                <span uk-icon="icon: cloud-upload"></span>
                <span className="uk-text-middle">Drop files here to upload</span>
              </div>
            </div>
          </div>
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
          <div className="uk-margin uk-grid">
            <div className='uk-column-1-3'>
              <div className="uk-width-1-1">
                <label className='uk-form-label' htmlFor="Video Name">Video Name </label>
                <input type="text" className="uk-input" name="firstName" />
              </div>
              <div className="uk-width-1-1">
                <label className='uk-form-label' htmlFor="Video Category">Video URL </label>
                <input type="text" className="uk-input" name="firstName" />
              </div>
              <div className="uk-width-1-1">
                <div className="uk-width-1-3">
                  <label className='uk-form-label' htmlFor="Video URL">Video Category </label>
                  <input type="text" className="uk-input" name="firstName" />
                </div>
                <div className="uk-width-1-6">
                  <button className="uk-button uk-button-default uk-button-small" type='button'> F</button>
                </div>
              </div>

            </div>
          </div>
          {/* <div className='uk-margin uk-grid'>\
            <div className='uk-width-1'>
              <button className="uk-button uk-button-default" type="button">Add Item</button>
            </div>
          </div> */}
        </form>
      </div>

    </div>
  );
}

export default addCourse;
