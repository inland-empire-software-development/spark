import db from '../../../lib/db';
import {Message} from '../../..';
import {NextApiRequest, NextApiResponse} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Get credentials from JSON body
  const {username, email, password, role} = req.body;

  if (username && email && password) {
    db.createUser(username, password, email, role)
        .then((result: any) => {
          res.send(JSON.stringify(result));
          res.end();
        } )
        .catch((error: Error) => {
          res.send(JSON.stringify(error));
          res.end();
        });
  } else {
    res.send({
      status: false,
      message: "Error with data provided.",
    } as Message);
    res.end();
  }
};
