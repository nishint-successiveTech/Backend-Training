import { CountryModel } from "../models/CountryModel";
const countries = [
  { name: "Brazil" },
  { name: "Germany" },
  { name: "Argentina" },
  { name: "France" },
  { name: "Japan" },
];

export const seedCountries = async () => {
  try {
    const exist = await CountryModel.exists({});
    if (exist) {
      console.log("Data already present in DB");
      return;
    }
    await CountryModel.insertMany(countries);
    console.log("Data inserted ");
    return;
  } catch (e: any) {
    console.log("FAILED TO STORE IN DB", e);
    return (new Error(e.message));
  }
};
