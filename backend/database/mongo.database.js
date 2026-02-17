import mongoose from "mongoose";

let db;

const URI = process.env.MONGO_URL;


async function connection() {
  if (db) return db; 
  db = await mongoose.connect(URI);
  console.log("connected to mongo db")
  return db;
}


export default connection;
