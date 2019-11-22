// Require and initialize outside of your main handler
const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD
  }
});

// Main handler function
exports.handler = async (event, context) => {
  // Run your query
  let results = await mysql.query("SELECT * FROM iesd_portal.users");

  // Run clean up function
  await mysql.end();

  // Return the results
  return results;
};
