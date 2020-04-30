import {queryAsync, SqlQuery} from "../dbP";

export interface CourseEntity {
  id: number;
  code: string;
  status: number;
  name: string;
  instructor: string;
}

// interface CourseData {
//   course_id: number;
//   code: string;
//   status: number;
//   name: string;
//   instructor: string;
//   studentsEnrolled?: string[];
// }

class Course {
  query: (arg1: SqlQuery) => Promise<any>;
  constructor(queryAsync: (arg1: SqlQuery) => Promise<any>) {
    this.query = queryAsync;
  }

  async getAll(): Promise<CourseEntity[]> {
    const data = await this.query({sql: `SELECT * FROM ${process.env.DBNAME}.course`});
    const results = data.map((result: any) => this.dataToEntity(result));
    return results;
  }

  async getByID(id: string): Promise<CourseEntity> {
    try {
      const data = await this.query({
        sql: `SELECT * FROM ${process.env.DBNAME}.course WHERE course_id = ?`,
        values: [id],
      });

      return this.dataToEntity(data[0]);
    } catch (e) {
      throw new Error('Unable to get user by ID');
    }
  }

  dataToEntity(data: any): CourseEntity {
    return {
      id: data.course_id,
      code: data.code,
      status: data.status,
      name: data.name,
      instructor: data.instructor,
    };
  }
}

export default new Course(queryAsync);
