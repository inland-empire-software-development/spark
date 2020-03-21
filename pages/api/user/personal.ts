/* eslint-disable indent */
/* eslint-disable comma-dangle */
import db from '../../../lib/db';
import {Message} from '../../..';
import {NextApiResponse, NextApiRequest} from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // set headers
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  res.setHeader('Content-Type', 'json/javascript');

  const {
    profilepic,
    firstname,
    lastname,
    title,
    phone,
    about,
    oldpassword,
    password,
    facebook,
    twitter,
    linkedin,
    instagram
  } = req.body;

  // example message - whatever you want to return, use this format.
  const david = {
    status: false,
    message: `\nPic: ${profilepic} \nName: ${firstname} ${lastname} \nTitle: ${title} \nPhone: ${phone} \nAbout: ${about} \nOldPassword: ${oldpassword} \nPassword: ${password} \nfacebook: ${facebook} \nTwitter: ${twitter} \nLinkedIn: ${linkedin} \nInstagram: ${instagram}\n`
  } as Message;

  // showing return example
  res.send(david);


  // Get profile fields from JSON body
  // check form to see how you're passing them back.
  const {username} = req.body;
  const test = false; // turn on to see how getUser function works;

  // use the db object to interact with the database.
  // here we have a getUser function. Create one to update personal information.
  // escape any data you are sending to the db object or storing in the database.
  // make sure you are validating on the frontend and sanitizing on the backend.
  if (test) {
    db.getUser(escape(username)).then((user: any) => {
      // once the db function has returned successfully, handle the next steps
      res.status(200); // we set the return status to 200.

      // example of checking and returning early (only if you need to)
      if (!user) {
        res.send(invalid);
        res.end();
        return false;
      }
    });
  }
};
