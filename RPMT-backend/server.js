const express = require("express");
const mongoose = require("mongoose");
const router1 = require("./routes/shv_res_topic_routes");
const router2 = require("./routes/shv_res_topic_notice_admin_routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/resTopics", router1); // localhost:5000/resTopics
app.use("/resTopicsNotice", router2); // localhost:5000/resTopicsNotice



const panelroutes = require("./routes/sug_panel-routes");
app.use("/panel", panelroutes );


mongoose
  .connect(
    "mongodb+srv://afProject2022:af2022proj12A@afprojectcluster.t6kdd.mongodb.net/RPMT_DB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
