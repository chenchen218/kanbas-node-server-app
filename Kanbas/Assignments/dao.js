import db from "../Database/index.js";

export const findAllAssignments = () => db.assignments;
export const findAssignmentById = (id) =>
  db.assignments.find((a) => a._id === id);
export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: new Date().getTime().toString() };
  db.assignments.push(newAssignment);
  return newAssignment;
};
export const updateAssignment = (id, assignment) => {
  const index = db.assignments.findIndex((a) => a._id === id);
  db.assignments[index] = { ...db.assignments[index], ...assignment };
  return { status: "OK" };
};
export const deleteAssignment = (id) => {
  db.assignments = db.assignments.filter((a) => a._id !== id);
  return { status: "OK" };
};
