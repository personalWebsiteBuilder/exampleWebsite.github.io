const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://JDMedlin:Northeastern2022@cluster0-6i62n.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
