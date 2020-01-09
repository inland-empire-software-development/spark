import db from '../../../lib/db';
import {Request, Response, Message} from '../../..';

export default async (req: Request, res: Response) => {
  // Get credentials from JSON body
  const {username} = req.body;

  if (username) {
    db.userExists(username)
        .then((result: any) => {
          res.send(JSON.stringify(result));
        }).catch((error: any) => {
          res.send(JSON.stringify(error));
        });
  } else {
    res.send({
      status: false,
      message: "input not provided",
    } as Message);
  }
};
