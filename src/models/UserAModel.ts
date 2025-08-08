import { required } from "joi";
import mongoose, { Schema } from "mongoose";
import { USER_ROLES } from "./userRoles";

const userMaker = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
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
  role: {
    type: String,
    enum: USER_ROLES,
    required: true,
  },
});

export const UserAModel = mongoose.model("NishTestDB3", userMaker);
