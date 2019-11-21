var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '',
    user : '',
    password : '',
    database : ''
  }
});

export const db = function(query){
  sequelize.query(query, {raw: true})
  .then(rows => rows)
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}
