import {NextApiResponse, NextApiRequest} from 'next';
import course from '../../../../lib/entities/course';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const data = await course.getByID(id);
  res.send(data);
};
