import model from "./model.js";
import mongoose from "mongoose";

export const createAssignment = (assignment) => {
  return model.create(assignment);
};

export const findAllAssignments = () => {
  return model.find();
};

export const findAssignmentById = (aid) => {
  return model.findById(aid);
};

export const updateAssignment = (aid, assignment) => {
  return model.updateOne({ _id: aid }, { $set: assignment });
};

export const deleteAssignment = (aid) => {
  return model.deleteOne({ _id: aid });
};

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
};
