import app from "./server";
import { connectDB } from "./config/db";
import { seedCountries } from "./seed/seedCountries";
import { config } from "./config/config";

const { PORT } = config;

const startServer = async () => {
  await connectDB();
  await seedCountries();
  app.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
  });
};

startServer();
