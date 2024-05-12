import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    tyoe: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  enrollmentStatus: {
    type: String,
    required: true,
    enum: ["Open", "Closed", "In Progress"],
  },
  duration: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pre_requisites: {
    type: String,
    required: true,
  },
  syllabus: {
    type: String,
    required: true,
  },
  students: [{
    type: String,
  }]
});

export default mongoose.model("Course", courseSchema)
