const express = require("express");
const  path = require("path");
const  bodyParser = require("body-parser");
 const cors = require("cors");
const mapRoute = require("./routes/map.route");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", mapRoute);
const port = process.env.PORT || 4000;
const server = app.listen(port, function() {
  console.log("Listening on port " + port);
});