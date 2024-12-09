import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
      required: true,
    },
    description: String,
    dueDate: Date,
    points: Number,
    status: {
      type: String,
      enum: ["PUBLISHED", "DRAFT"],
      default: "DRAFT",
    },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
