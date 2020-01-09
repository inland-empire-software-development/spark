import db from '../../../lib/db';
import {Request, Response, Message} from '../../..';

export default async (req: Request, res: Response): Promise<void> => {
  // Get credentials from JSON body
  const {username, email, password, role} = req.body;

  if (username && email && password) {
    db.createUser(username, password, email, role)
        .then((result: any) => res.send(JSON.stringify(result)))
        .catch((error: Error) => {
          res.send(JSON.stringify(error));
        });
  } else {
    res.send({
      status: false,
      message: "Error with data provided.",
    } as Message);
  }
};
