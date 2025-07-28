import { Country } from "../models/Country";
import { NextFunction } from "express";
const countries = [
  { name: "Brazil" },
  { name: "Germany" },
  { name: "Argentina" },
  { name: "France" },
  { name: "Japan" },
];

export const seedCountries = async () => {
  try {
    const exist = await Country.exists({});
    if (exist) {
      console.log("Data already present in DB");
      return;
    }
    await Country.insertMany(countries);
    console.log("Data inserted ");
  } catch (e: any) {
    console.log("FAILED TO STORE IN DB", e);
    return (new Error(e.message));
  }
};
