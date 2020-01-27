import db from '../../../lib/db';
import {Message} from '../../../index';
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Get credentials from JSON body
  const {email} = req.body;

  if (email) {
    db.emailExists(email)
        .then((result: any) => {
          res.send(JSON.stringify(result));
        }).catch((error: any) => {
          res.send(JSON.stringify(error));
        });
  } else {
    res.send({
      status: false,
      message: "Error with data provided.",
    } as Message);
  }
};
