/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
//  - Profile picture upload not implemented
// =======================================================================

// import db from '../../../lib/db';
// import auth from '../../../lib/auth';
import { createWriteStream } from 'fs';
import { Message } from '../../..';
import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // set headers
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  res.setHeader('Content-Type', 'json/javascript');

  //const { profilePic } = req.body;
  console.log(`\nProfilePic: \n\n\n\n ${req.headers}\n`);
  console.log('********************');
  console.log(await req.body);
  console.log('********************');

  req.pipe(createWriteStream(`./public/images/profilepics/userID.jpg`));

  // check form to see how you're passing them back.
  const testMessage = {
    status: false,
    message: `${req}`
  } as Message;

  // example message - whatever you want to return, use this format.
  // showing return example
  res.send(testMessage);
};

export const config = {
  api: {
    bodyParser: false
  }
};
