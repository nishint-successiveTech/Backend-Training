import mongoose, { Schema } from "mongoose";

const userMaker = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    required: true,
    unique:true
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    minlength: 10,
    required: true,
    unique: true,
  },
});

export const UserAModel = mongoose.model("UserA12", userMaker);
