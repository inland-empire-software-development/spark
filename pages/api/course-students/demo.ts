import {NextApiResponse, NextApiRequest} from 'next';
import {Connection} from "typeorm";
import {CourseDemo, UserDemo} from '../../../lib/entity';
import dbInit from "../../../lib/dbInit";
import userMeta from '../../../models/userMeta';


const getAllCoursesByInstructor = async (teacherID: string, connection: Connection) => {
  const courseRepository = connection.getRepository(CourseDemo);

  const courses =
    await courseRepository.createQueryBuilder("course")
        .select(
            ["course", "user.id", "userMeta.id", "userMeta.firstName", "userMeta.lastName", "userMeta.avatarUrl", "userMeta.status"],
        )
        .leftJoin("course.users", "user")
        .leftJoin("user.userMeta", "userMeta")
        .where("instructor = :id", {id: teacherID})
        .getMany();
  // const courses = await courseRepository.find({
  //   where: {instructor: teacherID},
  //   select: ["id", "code", "name"],
  //   // relations: ["users", "users.userMeta"],
  //   join: {
  //     alias: "course",
  //     leftJoin: {
  //       users: "course.users",
  //       userMeta: "users.userMeta",
  //     },
  //   },
  // });
  return courses;
};


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const connection = await dbInit(); // established a connection if one does not yet exist

  // const user = req.cookies['portal-user'];
  // const userID = req.cookies['portal-user-id'];

  const user = "jacob";
  const userID = "2";

  if (!user || !userID) {
    // TODO: Verifiy user's role is teacher/admin
    res.status(401).send({
      message: "User is not authorized",
    });
  } else {
    switch (req.method) {
      case "GET":
        try {
          const courses = await getAllCoursesByInstructor(userID, connection);
          res.status(200).send(courses);
        } catch (e) {
          console.error(e);
          res.status(500).send({
            message: "Unknown error",
          });
        }
        break;
      default:
        res.status(404).end();
    }
  }
};
