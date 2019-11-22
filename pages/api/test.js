var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.93.55.117",
  database: "iesd_portal",
  user: "root",
  password: "Hpf15031!"
});

export default async function handle(req, res) {
  console.log('hello');
  console.log(mysql);
 try {
   con.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");
   });

   // Return the results
   res.status(200);
   res.send('hello');
 } catch(error){
   console.log(error);
 }
}
