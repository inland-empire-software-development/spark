import db from '../../lib/db';

const root = require('app-root-path');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

export default (req, res) => {
  new Promise((resolve, reject) => {
    const models = {};

    fs.readdirSync(root + '/models')
    .forEach(file => {
      const fileName = file.replace('.js', '');
      const model = require('./../../models/' + fileName);
      models[fileName] = model[fileName];
    });

    models.length !== 0 ? resolve(models) : reject(error)

  }).then(models => {
    for(let model in models){
      if (models.hasOwnProperty(model)){
        models[model]();
      }
    }
    res.status(200);
    res.send(models)
  }).catch(error => {
    console.log(error);
    res.status(500)
  })


};
