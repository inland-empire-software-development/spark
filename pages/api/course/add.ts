import db from "../../../lib/db";

export default async (req: any, res: any) => {
  const data = JSON.parse(req.body);
  const {courseTitle, cohortID, courseStart, courseExpire, courseDescription} = data;


  const query = `INSERT INTO courses (courseTitle, cohortID, courseStart, courseExpire,  courseDescription) 
                values ("${courseTitle}","${cohortID}","${courseStart}", "${courseExpire}", "${courseDescription}")`;

  console.log(query);

  db.query(query, (error, response) => {
    if (error) throw error;
    console.log(response);
  });
};


