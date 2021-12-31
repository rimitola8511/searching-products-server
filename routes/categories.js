const express = require("express");
const router = express.Router();

const { findCategoryById } = require("../controllers/categories");

router.route("/:id").get(findCategoryById);

module.exports = router;
