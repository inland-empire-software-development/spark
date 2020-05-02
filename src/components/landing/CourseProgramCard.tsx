import React from 'react';

export interface CourseProgramProps {
  id: string;
  title: string;
  contents: string[];
  nextDay: string;
  nextMonth: string;
  classTimeString: string;
}

const CourseProgramCard: React.FC<CourseProgramProps> = (props) => (
  <div className="uk-card uk-card-default uk-card-body">
    <div className="uk-grid-divider uk-grid-match" data-uk-grid>
      <div className="uk-align-center uk-margin-remove uk-width-1-3@m">
        <h4 className="primary course-program-date-header">{props.nextDay}</h4>
        <h5 className="course-program-date">{props.nextMonth}</h5>
        <p className="course-program-time">{props.classTimeString}</p>
      </div>
      <div className="uk-align-center uk-margin-remove uk-width-2-3@m">
        <h4 className="black course-program-detail">{props.title}</h4>
        <ul className="course-program-detail-list">
          {props.contents.map((item, index) => (
            <li key={index} className="light-gray">{item}</li>
          ),
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default CourseProgramCard;
