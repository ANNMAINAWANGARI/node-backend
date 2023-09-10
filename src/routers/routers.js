const express = require("express");
const { getData } = require("../controllers/controller");
const router = express.Router();

router.get("/api", getData);

module.exports = router;