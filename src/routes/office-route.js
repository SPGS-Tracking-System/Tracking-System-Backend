const express = require("express");
const officeController = require("../controllers/office-controller");

const officeRouter = express.Router();


officeRouter.post('/auth/register', officeController.registerOffice);
officeRouter.post('/auth/login', officeController.loginOffice);
officeRouter.get('/offices', officeController.getAllOffice);
officeRouter.get('/office/:officeId', officeController.getOfficeById);
officeRouter.put('/office/update/:officeId', officeController.updateOffice);
officeRouter.delete('/office/delete/:officeId', officeController.deleteOffice);


module.exports = officeRouter