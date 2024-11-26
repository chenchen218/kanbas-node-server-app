// Kanbas/Assignments/dao.js
import Database from "../Database/index.js";

export function createAssignment(assignment) {
  const newAssignment = {
    ...assignment,
    _id: new Date().getTime().toString(),
  };
  Database.assignments.push(newAssignment);
  return newAssignment;
}

export function findAssignment(assignmentId) {
  return Database.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
}

export function findAssignmentsForCourse(courseId) {
  return Database.assignments.filter(
    (assignment) => assignment.course === courseId
  );
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
  return { status: "OK" };
}
