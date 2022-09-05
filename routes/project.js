const express = require('express');
const router = express.Router();

const projectController = require('./../controllers/project');

router.route('/')
    .get(projectController.getAllData)
    .post(projectController.saveRecord)

router.route('/:id')
    .get(projectController.getOneById)
    .delete(projectController.deleteOneById)

module.exports = router;