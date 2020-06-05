import {Connection} from "typeorm";
import {Course} from "./entity";

export const getAllCoursesByInstructor = async (teacherID: string, connection: Connection) => {
  const courseRepository = connection.getRepository(Course);

  const courses =
    await courseRepository.createQueryBuilder("course")
        .select(
            ["course", "user.id", "user.email", "userMeta.id", "userMeta.firstName", "userMeta.lastName", "userMeta.avatarUrl", "userMeta.status"],
        )
        .leftJoin("course.users", "user")
        .leftJoin("user.userMeta", "userMeta")
        .where("instructor = :id", {id: teacherID})
        .getMany();

  return courses;
};
