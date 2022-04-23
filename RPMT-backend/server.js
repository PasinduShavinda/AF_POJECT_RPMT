const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/shv_res_topic_routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/resTopics", router); // localhost:5000/resTopics

mongoose
  .connect(
    "mongodb+srv://testclusteraf:test12A123@clusteraftest.pmajz.mongodb.net/testDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
