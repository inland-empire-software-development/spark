import db from "../../lib/db";

const root = require("app-root-path");
const fs = require("fs");

export default (req, res) => {
  new Promise((resolve, reject) => {
    const models = {};

    fs.readdirSync(root + "/models")
      .forEach(file => {
        const fileName = file.replace(".js", "");
        const model = require("./../../models/" + fileName);
        models[fileName] = model[fileName];
      });

    models.length !== 0 ? resolve(models) : reject(error);

  }).then(async models => {
    const messages = {};

    for (let model in models) {
      if (models.hasOwnProperty(model)) {
        messages[model] = await models[model](db);
      }
    }

    res.status(200);
    res.send(messages);
  }).catch(error => {
    console.log(error);
    res.status(300);
    res.send(error);
  });

};
