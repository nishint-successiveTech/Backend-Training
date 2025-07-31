import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  jerseyNumber: {
    type: Number,
    required: true,
  },
});

const PlayerEntity = mongoose.model("Cricket5", playerSchema);
export default PlayerEntity;
