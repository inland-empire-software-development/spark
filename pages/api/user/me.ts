import {NextApiResponse, NextApiRequest} from 'next';
import {User} from '../../../lib/entity';
import dbInit from "../../../lib/dbInit";
import {Connection} from 'typeorm';

const getUserWithMeta = async (userID: string, connection: Connection): Promise<User> => {
  const userRepository = connection.getRepository(User);

  const user = await userRepository.findOneOrFail(userID, {
    select: ["id", "email", "userMeta", "userMeta"],
    relations: ["userMeta"],
  });

  return user;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // should replace getting user with middleware!
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
          const user = await getUserWithMeta(userID, connection);
          res.status(200).send(user);
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
