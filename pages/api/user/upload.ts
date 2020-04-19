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

  let status: boolean = false;
  let message: string = 'Error: Image failed to upload';

  if (req.pipe(createWriteStream("./public/images/avatars/" + req.headers['user-identification']))) {
    status = true;
    message = 'Image uploaded';
    console.log('Will be sending this image to user ID: ' + req.headers['user-identification']);
  }
  res.statusCode = 200;

  const statusMessage = {
    status: status,
    message: message
  } as Message;

  // // example message - whatever you want to return, use this format.
  // // showing return example
  res.send(statusMessage);
  res.end();
};

