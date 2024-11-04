const express = require("express");
const docController = require("../controllers/doc-controller");

const docRouter = express.Router();


docRouter.post('/document/create', docController.createDocument);
docRouter.get('/documents', docController.getAllDocument);
docRouter.get('/document/:docId', docController.getDocumentById);
docRouter.put('/document/update/:docId', docController.updateDocument);
docRouter.delete('/document/delete/:docId', docController.deleteDocument);


module.exports = docRouter;