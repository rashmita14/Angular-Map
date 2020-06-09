const express = require("express");
const app = express();
const mapRoutes = express.Router();
let MapDataMock = require("./map-mock.json");

mapRoutes.route("/mapdata").get(function(req, res) {
  res.json(MapDataMock);
});

module.exports = mapRoutes;