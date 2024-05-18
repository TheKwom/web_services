const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-output.json");

router.use("/contacts", require("./contacts"));
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));
router.use(
  "/",
  (docData = (req, res) => {
    let docData = {
      documentationURL: "https://cse341-spring24-uwqp.onrender.com/api-docs",
    };
    res.send(docData);
  })
);

module.exports = router;
