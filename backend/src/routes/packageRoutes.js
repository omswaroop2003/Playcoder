const express = require("express");
const { installPackage } = require("../controllers/packageController");

const router = express.Router();
router.post("/install", installPackage);

module.exports = router;
