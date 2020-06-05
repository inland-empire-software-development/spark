import {NextApiResponse, NextApiRequest} from 'next';
import dbInit from "../../../lib/dbInit";
import {getAllCoursesByInstructor} from '../../../lib/dbUtil';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const connection = await dbInit(); // established a connection if one does not yet exist

  const user = req.cookies['portal-user'];
  const userID = req.cookies['portal-user-id'];

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
