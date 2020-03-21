
import {NextApiResponse, NextApiRequest} from 'next';
import db from '../../../lib/db';

interface Student {
    id: number;
    imageUri: string;
    name: string;
    email: string;
    status: number;
}

interface Course {
    id: string;
    code: string;
    name: string;
    students: Array<Student>;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {user, userID} = req.body;

  if (user && userID) {
    db.getAllCoursesByInstructor(userID)
        .then((result: any) => {
          const {courses, users} = result.data;

          const c = courses.map((course: any) => {
            return {
              id: course.course_id,
              code: course.code,
              name: course.name,
              students: course.students_enrolled.split(',').map((student: any) => Object.assign(users[student], {id: student})),
            } as Course;
          });

          res.send(c);
        });
  }

  res.status(200);

  // students for all courses you're an instructor for
};
