const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//As I learned at the beginning of this course CSE341 and researching in my notes.
// I will connect my project with my MongodB Database called dulezzuabakery_management_system
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      "Wow, You are a wonderful software development because now you are connect to MongoDB. ",
    );
  } catch (err) {
    console.err(
      "Watch out, You are not connecting to MongoDB budy: ",
      err.message,
    );
    process.exit(1);
  }
};

module.exports = connectDB;
