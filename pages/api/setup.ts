import db from "../../lib/db";
import {Message} from "../../index";
import {error} from "next/dist/build/output/log";
import {NextApiRequest, NextApiResponse} from "next";

const root = require("app-root-path");
const fs = require("fs");

interface StoreModel {
    [property: string]: {};
}

type Messages = StoreModel;

// Setup database tables if they don't exist.
export default (req: NextApiRequest, res: NextApiResponse) => {
  const {secret} = req.query; // secret key from user requesting setup

  // check if secret given matches one in this environment
  if (secret !== undefined && process.env.SECRET === secret) {
    // Promise based
    new Promise((resolve, reject) => {
      const models: Messages = {}; // temporary store for all models

      // Iterate through file directory and find models
      fs.readdirSync(root + "/models") // directory to read
          .forEach((file: string) => { // iterate through each file in that directory
            const fileName = file.replace(".ts", ""); // remove .js
            const model = require("./../../models/" + fileName); // import the model
            models[fileName] = model.default; // add model to temp. store for later use
          });

      // if models found, resolve, reject if nothing found
      models.length === 0 ? reject(error) : resolve(models);
    })
        .then(async (data: any) => {
          const messages: Messages = {}; // temporary message store

          // iterate through all models found
          for (const model in data) {
          // model should have a main function with same name to trigger its creation
            if (data.hasOwnProperty(model)) {
              messages[model] = await data[model](db) as Message; // save result to the message store
            }
          }

          return await messages;
        })
        .then((data) => {
          console.log('All models processed.');
          res.send(data); // send all messages as an object in response
        })
        .catch((error) => {
          res.send(error); // send error found in response
        });
  } else {
    // secret did not match, let user know they're not authorized to run setup
    res.send({
      status: false,
      message: "not authorized...",
    } as Message);
  }
};
