import db from '../../../lib/db';
import {Message} from '../../..';
import {NextApiResponse, NextApiRequest} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {user = false, token = false} = req.body;

  if (user && token) {
    db.confirmEmail(user, token)
        .then((result: any) => {
          if (result && result === 'active') {
            res.send({
              status: true,
              message: "Account already activate.",
            } as Message);
          } else if (result && result.serverStatus === 2) {
            res.send({
              status: true,
              message: "Account has been activated.",
            } as Message);
          }
        }).catch((error: Error) => {
          res.send({
            status: false,
            message: error.message,
          } as Message);
        });
  } else {
    res.send({
      status: false,
      message: "Invalid input provided.",
    } as Message);
  }
};
