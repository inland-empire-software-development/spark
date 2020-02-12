import db from "../../lib/db";
import {Message} from "../../index";
import {NextApiRequest, NextApiResponse} from "next";


// Route to get meta data from the database.
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {key} = req.body; // get key provided by user

  // Check if key is a string
  if (key && typeof key === "string") {
    const meta = await db.getKey(req.body);
    res.send(JSON.stringify(meta.meta_value));
    // check if key is an array
  } else if (key && Array.isArray(key)) {
    const meta = await db.getKeys(req.body);
    res.send(JSON.stringify(meta));
  } else {
    res.send({
      status: false,
      message: "key(s) passed incorrectly..",
    } as Message);
  }

  res.end();
};
