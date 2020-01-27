import db from '../../../lib/db';
import {Message} from '../../..';
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Get credentials from JSON body
  const {username} = req.body;

  if (username) {
    db.userExists(username)
        .then((result: any) => {
          res.send(JSON.stringify(result));
        }).catch((error: any) => {
          res.status(500);
          res.send(JSON.stringify(error));
        });
  } else {
    res.send({
      status: false,
      message: "input not provided",
    } as Message);
  }
};
