import db from '../../../lib/db';
import {Message} from '../../..';
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Get credentials from JSON body
  const {username} = req.body;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (username) {
    db.userExists(username)
        .then((result: any) => {
          res.send(JSON.stringify(result));
          res.end();
        }).catch((error: any) => {
          res.status(500);
          res.send({
            status: false,
            messages: error.toString()
          });
          res.end();
        });
  } else {
    res.send({
      status: false,
      message: "input not provided",
    } as Message);
    res.end();
  }
};
