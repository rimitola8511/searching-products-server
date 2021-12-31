const express = require("express");
const router = express.Router();

const { getItemsByQuery, getItemById } = require("../controllers/items");

router.route("/search").get(getItemsByQuery);
router.route("/:id").get(getItemById);

module.exports = router;
