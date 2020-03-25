import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Context} from '../../../src/context';
import DashboardLayout from "../../../src/components/layouts/DashboardLayout";
import ManageStudents, {ManageStudentsCourse} from "../../../src/components/manage-students/ManageStudents";

// mapDataToCourseProps is a utility function to add types to fetched data
// we could do this in api/user/students, but parts should be independent
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
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.HOST + "api/user/students", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
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

  const handleManageUser = (id: string) => {
    console.log(`Go to manage user page for user with id: ${id}`);
    router.push(`students/${id}`);
  };

  const handleViewUser = (id: string) => {
    console.log(`Go to user page for user with id: ${id}`);
    router.push(`users/${id}`);
  };

  const handleRemoveStudentsFromCourse = (courseID: string, userIDs: string[]) => {
    console.log(courseID, userIDs);
  };

  return (
    <DashboardLayout>
      {courses.length !== 0 && (
        <ManageStudents
          courses={courses}
          onManageUser={(id) => handleManageUser(id)}
          onViewUser={(id) => handleViewUser(id)}
          onRemoveUsersFromCourse={({courseID, userIDs}) => handleRemoveStudentsFromCourse(courseID, userIDs)}
        />
      )}
    </DashboardLayout>
  );
};


export default Students;

