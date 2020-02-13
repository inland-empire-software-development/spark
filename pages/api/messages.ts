import db from "../../lib/db";
import {Message} from "../../index";
import {NextApiRequest, NextApiResponse} from "next";


// Route to get meta data from the database.
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {user, userID} = req.body; // get key provided by user

  if (user && userID) {
    const messages = await db.getMessageCount(req.body);
    res.send(JSON.stringify(messages));
  } else {
    res.send({
      status: false,
      message: "data passed incorrectly..",
    } as Message);
  }

  res.end();
};
