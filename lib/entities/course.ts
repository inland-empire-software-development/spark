import {queryAsync, SqlQuery} from "../dbP";

interface CourseData {
  id: string;
  code: string;
  status: string;
  name: Date;
  instructor: Date;
  studentsEnrolled: string[];
}

class Course {
  query: (arg1: SqlQuery) => Promise<any>;
  constructor(queryAsync: (arg1: SqlQuery) => Promise<any>) {
    this.query = queryAsync;
  }

  async getAll(): Promise<CourseData[]> {
    this.query(`SELECT * FROM ${process.env.DBNAME}.courses`);
    return [];
  }
}

export default new Course(queryAsync);
