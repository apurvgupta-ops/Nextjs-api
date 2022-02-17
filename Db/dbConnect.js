import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  const db = mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  connection.isConnected = db.connection[0].readyState;
}

export default dbConnect;
