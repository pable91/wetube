import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  filseUrl: {
    type: String,
    required: "File URL is requred",
  },

  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  view: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Video, VideoSchema");
export default model;
