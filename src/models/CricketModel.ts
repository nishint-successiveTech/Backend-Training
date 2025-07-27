import mongoose from "mongoose";

const cricketSchema = new mongoose.Schema({
  playerName: {
    type: String,
    minlength:3,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  runs: {
    type: Number,
    required: true,
  },
});

export const Cricket = mongoose.model("Cricket", cricketSchema);
