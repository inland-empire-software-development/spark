import React from "react";
import './ManageStudents.scss';

const ManageStudents: React.FC = () => {
  return (
    <div className="manage-students">
      <div className="uk-card uk-card-default uk-card-body">
        <ul data-uk-tab>
          <li className="uk-active"><a href="#">WEB101</a></li>
          <li><a href="#">WEB102</a></li>
          <li><a href="#">CS101</a></li>
          <li><a href="#">GD101</a></li>
        </ul>
        <ul className="uk-breadcrumb">
          <li><a href="#">Students</a></li>
          <li><a href="#">Intro to Web Development</a></li>
        </ul>


        {/* TODO - Select Action */}
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
              <tr>
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
              </tr>
              <tr>
                <td><input className="uk-checkbox" type="checkbox" /></td>
                <td>
                  <div className="student-photo">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                      alt="User Image"
                      data-uk-img/>
                  </div>
                </td>
                <td>
                    Ana De Armas
                </td>
                <td>why@benaffleck.com</td>
                <td>Active</td>
                <td>Manage | View | Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
