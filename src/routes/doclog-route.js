const express = require("express");
const docLogController = require("../controllers/doclog-controller");


const docLogRouter = express.Router();

docLogRouter.post('/logs/:docId', docLogController.createDocLog);
docLogRouter.get('/logs/:docId', docLogController.getAllDocLog);



module.exports = docLogRouter;