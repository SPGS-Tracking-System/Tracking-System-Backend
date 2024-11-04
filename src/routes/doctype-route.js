const express = require("express");
const doctypeController = require("../controllers/doctype-controller");

const doctypeRouter = express.Router();


doctypeRouter.post('/document-types/create', doctypeController.createDocType);
doctypeRouter.get('/document-types', doctypeController.getAllDoctype);
doctypeRouter.get('/document-types/:doctypeId', doctypeController.getDoctypeById);


module.exports = doctypeRouter;