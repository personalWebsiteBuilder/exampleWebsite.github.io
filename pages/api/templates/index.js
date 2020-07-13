require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

export async function userInfo() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    console.log("found db");
    const col = db.collection("users");
    console.log("collection found");
    const response = await col.findOne({ email: "user@domain.com" });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await client.close();
  }
}
