const express = require("express");
const mongoose = require("mongoose");
const router1 = require("./routes/shv_res_topic_routes");
const router2 = require("./routes/shv_res_topic_notice_admin_routes");
const router3 = require("./routes/shv_rs_topic_file_routes");
const router4 = require("./routes/shv_ResDocfileRoutes");
const router5 = require("./routes/shv_ThesisDocfileRoutes");
const router6 = require("./routes/shv_res_admin_mschme_routes");
const router7 = require("./routes/shv_res_admin_template_routes");
const router8 = require("./routes/sug_panel-routes");

const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/resTopics", router1); // localhost:5000/resTopics
app.use("/resTopicsNotice", router2); // localhost:5000/resTopicsNotice
app.use(router3);
app.use(router4);
app.use(router5);
app.use(router6);
app.use(router7);
app.use("/panel", router8);

//..........udara...
app.get("/", (req, res) => {
  res.send("Running ");
});
app.use("/auth", require("./routes/User"));
app.use("/super", require("./routes/Supervisor"));
app.use("/penal", require("./routes/Penalmember"));
mongoose
  .connect(
    "mongodb+srv://afProject2022:af2022proj12A@afprojectcluster.t6kdd.mongodb.net/RPMT_DB?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
