const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/netflixDB", { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (!error) console.log("Mongodb connected");
  else console.log("Error while connecting database", JSON.stringify(error, undefined, 2));
});
