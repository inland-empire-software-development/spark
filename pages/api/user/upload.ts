/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
//  -
// =======================================================================

// import db from '../../../lib/db';
// import auth from '../../../lib/auth';
import {createWriteStream} from 'fs';
import {Message} from '../../..';
import {NextApiResponse, NextApiRequest} from 'next';


export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // // set headers
  // res.setHeader(
  //   'Cache-Control',
  //   'no-store, no-cache, must-revalidate, proxy-revalidate'
  // );

  req.pipe(createWriteStream("./public/images/avatars/" + req.headers['user-identification']));
  res.statusCode = 200;

  console.log('Will be sending this image to user ID: ' + req.headers['user-identification']);
  // // check form to see how you're passing them back.
  const testMessage = {
    status: false,
    message: 'bleh'
  } as Message;

  // // example message - whatever you want to return, use this format.
  // // showing return example
  res.send(testMessage);
  res.end();
};

