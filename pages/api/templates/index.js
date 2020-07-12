require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

export default async (req, res) => {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    console.log("found db");
    const col = db.collection("users");
    console.log("collection found");
    const User = await col.findOne({ email: "gerstley.h@northeastern.edu" });
    // console.log(User, "ALL USER");
    res.status(200).send(User);
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    await client.close();
  }
};
