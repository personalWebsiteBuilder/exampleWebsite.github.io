const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://JDMedlin:Northeastern2022@cluster0-6i62n.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);

export default async (req, res) => {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    console.log("found db");
    const col = db.collection("users");
    console.log("collection found");
    const User = await col.findOne({ email: "dougnut.j@northeastern.edu" });
    console.log(User, "ALL USER");
    res.status(200).send(User);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};
