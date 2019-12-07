import db from '../../lib/db';

export default async (req, res) => {
  // Get credentials from JSON body
  const {username} = req.body;


  db.userExists(username)
      .then((result) => {
        res.send(JSON.stringify(result));
      }).catch((error) => {
        res.send(JSON.stringify(error));
      });
};
