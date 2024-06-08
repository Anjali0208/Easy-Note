const mongoose = require("mongoose");

// database
const db = process.env.DATABASE;

//it returns a promise, so we use .then() to handle the promise returned from the
// server side and then return data if successful or an error message.
mongoose
  .connect(db)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("connection error: " + err);
  });
