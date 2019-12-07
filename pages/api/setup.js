import db from "../../lib/db";
const root = require("app-root-path");
const fs = require("fs");

// Setup database tables if they don't exist.
export default (req, res) => {
  const {secret} = req.query; // secret key from user requesting setup

  // check if secret given matches one in this environment
  if (secret !== undefined && process.env.SECRET === secret) {
    // Promise based
    new Promise((resolve, reject) => {
      const models = {}; // temporary store for all models

      // Iterate through file directory and find models
      fs.readdirSync(root + "/models") // directory to read
          .forEach((file) => { // iterate through each file in that directory
            const fileName = file.replace(".js", ""); // remove .js
            const model = require("./../../models/" + fileName); // import the model
            models[fileName] = model[fileName]; // add model to temp. store for later use
          });

      // if models found, resolve, reject if nothing found
      models.length === 0 ? reject(error) : resolve(models);
    })
        .then(async (models) => {
          const messages = {}; // temporary message store

          // iterate through all models found
          for (const model in models) {
          // model should have a main function with same name to trigger its creation
            if (models.hasOwnProperty(model)) {
              messages[model] = await models[model](db); // save result to the message store
            }
          }

          res.status(200); // send a positive status
          res.send(messages); // send all messages as an object in response
        })
        .catch((error) => {
          res.status(400); // send negative status
          res.send(error); // send error found in response
        });
  } else {
    // secret did not match, let user know they're not authorized to run setup
    res.status(400);
    res.send({
      message: "not authorized to run setup...",
    });
  }
};
