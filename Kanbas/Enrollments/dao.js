import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export const findAllEnrollments = () => {
  return Database.enrollments;
};

export const createEnrollment = (enrollment) => {
  const newEnrollment = {
    ...enrollment,
    _id: new Date().getTime().toString(),
  };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
};

export const deleteEnrollment = (userId, courseId) => {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
  return { status: "OK" };
};

export const findEnrollmentsByUser = (userId) => {
  return Database.enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
};
