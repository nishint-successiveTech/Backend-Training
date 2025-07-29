import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const CountryModel = mongoose.model("Country", CountrySchema);
