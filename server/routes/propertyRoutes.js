const express = require("express");
const router = express.Router();
const propertyController = require("../controller/propertyController");

router.post("/properties", propertyController.createProperty);
router.get("/properties", propertyController.getProperties);
router.get("/properties/:id", propertyController.getProperty);
router.put("/properties/:id", propertyController.updateProperty);
router.delete("/properties/:id", propertyController.deleteProperty);

module.exports = router;
