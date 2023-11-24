import app from "./app";
import config from "./app/config";
const port = config.port || 5000;
import mongoose from "mongoose";

async function main() {
  try {
    const url = `mongodb+srv://${config.dbUser}:${config.dbPass}@${config.dbHost}.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(url);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
