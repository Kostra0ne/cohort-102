const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
