import app from "./server";
import { connectDB } from "./config/db";
import { seedCountries } from "./seed/seedCountries";

const PORT = 9090;

const startServer = async () => {
  await connectDB();
  await seedCountries();
  app.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
  });
};

startServer();
