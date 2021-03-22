const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log("yay connect to the db !");
  })
  .catch((error) => {
    console.log(error);
  });
