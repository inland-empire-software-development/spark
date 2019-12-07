import db from '../../lib/db';

export default async (req, res) => {
  // Get credentials from JSON body
  const {email} = req.body;

  db.emailExists(email)
      .then((result) => {
        res.send(JSON.stringify(result));
      }).catch((error) => {
        res.send(JSON.stringify(error));
      });
};
