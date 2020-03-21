import React, {useContext, useEffect, useState} from "react";
import {Context} from '../../../src/context';
import DashboardLayout from "../../../src/components/layouts/DashboardLayout";
import ManageStudents from "../../../src/components/manage-students/ManageStudents";


// const fetch = require('node-fetch');

const actionsData = {
  onManageUser: () => console.log('manage user'),
  onViewUser: () => console.log('view user'),
  onDeleteUsers: () => console.log('delete user'),
};

const Students = () => {
  const {user, userID} = useContext(Context);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(process.env.HOST + "api/user/students", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        userID,
      }),
    })
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
        });
  }, []);

  return (
    <DashboardLayout>
      {course.length !== 0 && (
        <ManageStudents
          courses={course}
          {...actionsData}
        />
      )}
    </DashboardLayout>
  );
};

export default Students;
