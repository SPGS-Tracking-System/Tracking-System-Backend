const express = require("express");
const movementController = require("../controllers/movement-controller");


const movementRouter = express.Router();


movementRouter.post('/movements/:docId', movementController.createMovement);
movementRouter.get('/movements/:docId', movementController.getAllDocMovement);


module.exports = movementRouter;