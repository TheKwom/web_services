const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getData);

router.get("/:id", contactsController.getIndividualById);

module.exports = router;