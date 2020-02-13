import db from "../../lib/db";
import {Message} from "../../index";
import {NextApiRequest, NextApiResponse} from "next";


// Route to get meta data from the database.
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {user, userID} = req.body; // get key provided by user

  if (user && userID) {
    const notifications = await db.getNotificationCount(req.body);
    res.send(JSON.stringify(notifications));
  } else {
    res.send({
      status: false,
      message: "data passed incorrectly..",
    } as Message);
  }

  res.end();
};
