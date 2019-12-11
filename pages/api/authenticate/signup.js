import db from '../../../lib/db';

export default async (req, res) => {
  // Get credentials from JSON body
  const {username, email, password, role} = req.body;

  db.createUser(username, password, email, role)
      .then((result) => {
        res.send(JSON.stringify(result));
      }).catch((error) => {
        res.send(JSON.stringify(error));
      });
};
