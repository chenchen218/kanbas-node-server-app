import model from "./model.js";
import mongoose from "mongoose";

export async function findCoursesForUser(userId) {
  try {
    // Convert string ID to ObjectId
    // NEW: Convert string ID to ObjectId before querying
    const objectId = new mongoose.Types.ObjectId(userId);
    // CHANGED: use objectId instead of userId directly
    const enrollments = await model.find({ user: objectId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
  } catch (error) {
    console.error("Error in findCoursesForUser:", error);
    return [];
  }
}

export async function findUsersForCourse(courseId) {
  try {
    // Convert string ID to ObjectId
    const objectId = new mongoose.Types.ObjectId(courseId);
    const enrollments = await model.find({ course: objectId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  } catch (error) {
    console.error("Error in findUsersForCourse:", error);
    return [];
  }
}

export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
