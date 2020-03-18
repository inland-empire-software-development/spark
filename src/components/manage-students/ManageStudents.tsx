import React from "react";
import './ManageStudents.scss';

interface ManageStudentsProps {
  courses: ManageStudentsCourse[];
  onManageUser: (id: string) => void;
  onViewUser: (id: string) => void;
  onDeleteUser: (id: string) => void;
}

interface ManageStudentsCourse {
  id: string;
  code: string;
  name: string;
  students: ManageStudentUser [];
}

interface ManageStudentUser {
  id: string;
  imageUri: string;
  name: string;
  email: string;
  status: string;
}

const ManageStudents: React.FC<ManageStudentsProps> = (props) => {
  const [activeCourse, setActiveCourse] = React.useState<ManageStudentsCourse>(props.courses[0]);

  const courseTabs: JSX.Element[] = props.courses.map((course) => {
    const isActiveCourse = course.id === activeCourse.id;
    return (
      <li
        key={course.id}
        className={isActiveCourse ? "uk-active" : ""}
        onClick={() => {
          setActiveCourse(course);
        }}
      >
        <a>{course.code}</a>
      </li>
    );
  });

  const studentRows: JSX.Element[] = activeCourse.students.map((student) => {
    return (
      <tr key={student.id}>
        <td><input className="uk-checkbox" type="checkbox" /></td>
        <td>
          <div className="student-photo">
            <img
              src={student.imageUri}
              alt="User Image"
              data-uk-img/>
          </div>
        </td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.status}</td>
        <td>Manage | View | Delete</td>
      </tr>
    );
  });

  return (
    <div className="manage-students">
      <div className="uk-card uk-card-default uk-card-body">
        <ul className="uk-tab">
          {courseTabs}
        </ul>
        <ul className="uk-breadcrumb">
          <li>Students</li>
          <li>{activeCourse.name}</li>
        </ul>
        <button className="uk-button uk-margin-medium" disabled={false}>Delete</button>


        <div className="uk-overflow-auto">
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th className="uk-table-shrink">
                  <input className="uk-checkbox" type="checkbox" />
                </th>
                <th className="uk-table-shrink">IMAGE</th>
                <th className="uk-table-expand">NAME</th>
                <th className="uk-table-expand">EMAIL</th>
                <th className="uk-table-expand">STATUS</th>
                <th className="uk-table-expand">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {studentRows}
              {/* <tr>
                <td><input className="uk-checkbox" type="checkbox" /></td>
                <td>
                  <div className="student-photo">
                    <img
                      src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      alt="User Image"
                      data-uk-img/>
                  </div>
                </td>
                <td>
                    Karen Johnson
                </td>
                <td>email@aol.com</td>
                <td>Inactive</td>
                <td>Manage | View | Delete</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
