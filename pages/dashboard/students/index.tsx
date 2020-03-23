import React, {useContext, useEffect, useState} from "react";
import {Context} from '../../../src/context';
import DashboardLayout from "../../../src/components/layouts/DashboardLayout";
import ManageStudents, {ManageStudentsCourse} from "../../../src/components/manage-students/ManageStudents";


const mapDataToCourseProps = (data: any): ManageStudentsCourse[] => {
  return data.map((course: any) => ({
    id: course.id,
    code: course.code,
    name: course.name,
    students: course.students.map((student: any) => ({
      id: student.id,
      avatarUrl: student.avatar_url,
      firstName: student.first_name,
      lastName: student.last_name,
      email: student.email,
      status: student.status,
    })),
  }));
};

const Students = () => {
  const {user, userID} = useContext(Context);
  const [courses, setCourses] = useState<ManageStudentsCourse[]>([]);

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
          const courses = mapDataToCourseProps(data);
          setCourses(courses);
        });
  }, []);

  return (
    <DashboardLayout>
      {courses.length !== 0 && (
        <ManageStudents
          courses={courses}
          onManageUser={(id) => console.log(`onManageUser(${id})`)}
          onViewUser={(id) => console.log(`onViewUser(${id})`)}
          onRemoveUsersFromCourse={({courseID, userIDs}) => console.log(`onRemoveUsersFromCourse(${courseID}, ${userIDs})`)}
        />
      )}
    </DashboardLayout>
  );
};


export default Students;

