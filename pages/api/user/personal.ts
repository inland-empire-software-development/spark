/* eslint-disable indent */
/* eslint-disable comma-dangle */
// =======================================================================
// Known Issues/Todos
//  -Need clarification: Do I need to check if userid exists? To access userID should exist
// =======================================================================

import db from '../../../lib/db';
import auth from '../../../lib/auth';
import { Message } from '../../..';
import { NextApiResponse, NextApiRequest } from 'next';
import { sanitize } from '../../../src/components/user-info-input/sanitize/sanitize';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // set headers
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  res.setHeader('Content-Type', 'json/javascript');

  let status: boolean = true;
  let messageObj = {
    avatarURLMessage: (null as unknown) as string,
    firstNameMessage: (null as unknown) as string,
    lastNameMessage: (null as unknown) as string,
    titleMessage: (null as unknown) as string,
    phoneMessage: (null as unknown) as string,
    aboutMessage: (null as unknown) as string,
    facebookMessage: (null as unknown) as string,
    twitterMessage: (null as unknown) as string,
    linkedinMessage: (null as unknown) as string,
    instagramMessage: (null as unknown) as string,
    passwordMessage: (null as unknown) as string,
  };

  // // Get profile fields from JSON body
  // const {
  //   avatarURL,
  //   firstname,
  //   lastname,
  //   title,
  //   phone,
  //   about,
  //   oldpassword,
  //   password,
  //   facebook,
  //   twitter,
  //   linkedin,
  //   instagram,
  //   userID,
  // } = req.body;

  const avatarURL: string | null = req.body.avatarURL;
  const firstname: string | null = sanitize(req.body.firstname);
  const lastname: string | null = sanitize(req.body.lastname);
  const title: string | null = sanitize(req.body.title);
  const phone: string | null = sanitize(req.body.phone);
  const about: string | null = sanitize(req.body.about);
  const oldpassword: string | null = sanitize(req.body.oldpassword);
  const password: string | null = sanitize(req.body.password);
  const facebook: string | null = sanitize(req.body.facebook);
  const twitter: string | null = sanitize(req.body.twitter);
  const linkedin: string | null = sanitize(req.body.linkedin);
  const instagram: string | null = sanitize(req.body.instagram);
  const userID: string = req.body.userID;

  if (avatarURL) {
    db.updateUserInfo(userID, 'avatar_url', avatarURL);
  }

  if (firstname || firstname === '') {
    if (!db.updateUserInfo(userID, 'first_name', firstname)) {
      if (status) {
        status = false;
      }
      messageObj.firstNameMessage = 'Error: First name failed to update';
    }
  }

  if (lastname || lastname === '') {
    if (!db.updateUserInfo(userID, 'last_name', lastname)) {
      if (status) {
        status = false;
      }
      messageObj.lastNameMessage = 'Error: Last name failed to update';
    }
  }

  if (title || title === '') {
    if (!db.updateUserInfo(userID, 'title', title)) {
      if (status) {
        status = false;
      }
      messageObj.titleMessage = 'Error: Title failed to update';
    }
  }

  if (phone || phone === '') {
    if (!db.updateUserInfo(userID, 'phone', phone)) {
      if (status) {
        status = false;
      }
      messageObj.phoneMessage = 'Error: Phone # failed to update';
    }
  }

  if (about || about === '') {
    if (!db.updateUserInfo(userID, 'about', about)) {
      if (status) {
        status = false;
      }
      messageObj.aboutMessage = 'Error: Personal info failed to update';
    }
  }

  if (facebook || facebook === '') {
    if (!db.updateUserInfo(userID, 'facebook', facebook)) {
      if (status) {
        status = false;
      }
      messageObj.facebookMessage = 'Error: Facebook address failed to update';
    }
  }

  if (twitter || twitter === '') {
    if (!db.updateUserInfo(userID, 'twitter', twitter)) {
      if (status) {
        status = false;
      }
      messageObj.twitterMessage = 'Error: Twitter address failed to update';
    }
  }

  if (linkedin || linkedin === '') {
    if (!db.updateUserInfo(userID, 'linkedin', linkedin)) {
      if (status) {
        status = false;
      }
      messageObj.linkedinMessage = 'Error: LinkedIn address failed to update';
    }
  }

  if (instagram || instagram === '') {
    if (!db.updateUserInfo(userID, 'instagram', instagram)) {
      if (status) {
        status = false;
      }
      messageObj.facebookMessage = 'Error: Instagram address failed to update';
    }
  }

  const user = await db.getUserByID(escape(userID));

  if (password) {
    if (auth.verifyPassword(oldpassword, user.password)) {
      db.updateUserPassword(userID, password);
    } else {
      if (status) {
        status = false;
      }
      messageObj.passwordMessage = 'Error: Current Password does not match';
    }
  }

  const message = JSON.stringify(messageObj);
  // check form to see how you're passing them back.
  const statusMessage = ({
    status: status,
    message: message,
  } as unknown) as Message;

  // example message - whatever you want to return, use this format.
  // showing return example
  res.send(statusMessage);
};
