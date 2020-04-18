/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
//  -
// =======================================================================

import db from '../../../lib/db';
import auth from '../../../lib/auth';
import { Message } from '../../..';
import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // set headers
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  res.setHeader('Content-Type', 'json/javascript');

  // Get profile fields from JSON body
  const {
    avatarURL,
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
    instagram,
    userID,
  } = req.body;

  if (avatarURL) {
    db.updateUserInfo(userID, 'avatar_url', avatarURL);
  }

  if (firstname || firstname === '') {
    db.updateUserInfo(userID, 'first_name', firstname);
  }

  if (lastname || lastname === '') {
    db.updateUserInfo(userID, 'last_name', lastname);
  }

  if (title || title === '') {
    db.updateUserInfo(userID, 'title', title);
  }

  if (phone || phone === '') {
    db.updateUserInfo(userID, 'phone', phone);
  }

  if (about || about === '') {
    db.updateUserInfo(userID, 'about', about);
  }

  if (facebook || facebook === '') {
    db.updateUserInfo(userID, 'facebook', facebook);
  }

  if (twitter || twitter === '') {
    db.updateUserInfo(userID, 'twitter', twitter);
  }

  if (linkedin || linkedin === '') {
    db.updateUserInfo(userID, 'linkedin', linkedin);
  }

  if (instagram || instagram === '') {
    db.updateUserInfo(userID, 'instagram', instagram);
  }

  const user = await db.getUserByID(escape(userID));

  if (password) {
    if (auth.verifyPassword(oldpassword, user.password)) {
      db.updateUserPassword(userID, password);
    } else {
      console.log('Error: password verification failed');
    }
  }

  // check form to see how you're passing them back.
  const testMessage = {
    status: false,
    message: `${firstname}` /* `\nUser: ${user} \nUserID: ${userID} \nPic: ${profilepic} \nName: ${firstname} ${lastname} \nTitle: ${title} \nPhone: ${phone} \nAbout: ${about} \nOldPassword: ${oldpassword} \nPassword: ${password} \nfacebook: ${facebook} \nTwitter: ${twitter} \nLinkedIn: ${linkedin} \nInstagram: ${instagram}\n`*/,
  } as Message;

  // example message - whatever you want to return, use this format.
  // showing return example
  res.send(testMessage);
};
