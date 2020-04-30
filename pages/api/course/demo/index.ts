import {NextApiResponse, NextApiRequest} from 'next';
import course from '../../../../lib/entities/course';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Incoming request body: ", req.body);
  const data = await course.getAll();
  res.send(data);
};
