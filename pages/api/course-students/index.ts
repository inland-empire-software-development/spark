
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
  const user = req.cookies['portal-user'];
  const userID = req.cookies['portal-user-id'];

  if (!user || !userID) {
    res.status(401).send({
      message: "User is not authorized",
    });
  } else {
    // TODO - Verifiy user's role is teacher/admin
    switch (req.method) {
      case "GET":
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
              res.status(200).send(c);
            }).catch(() => {
              res.status(500).send({
                message: "Unknown error",
              });
            });
        break;
      default:
        res.status(404).end();
    }
  }

  // students for all courses you're an instructor for
};
