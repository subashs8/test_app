const mongoose = require('mongoose');
const Project = require('./../schemas/project');

const getAllData = function(req, res) {
    Project.find().exec()
    .then(documents => {
        res.status(200).json(documents);
    }).catch(error => {
        res.status(500).json({err: error})
    });
};

const getOneById = function(req, res) {
    const id = req.params.id;
    Project.findById(id).exec()
    .then(document => {
        res.status(200).json(document);
    }).catch(error => {
        res.status(500).json({err: error})
    });
};

const saveRecord = function(req, res) { 
    const project = new Project({
        _id: mongoose.Types.ObjectId(),
        projectName: req.body["projectName"],
        projectLeadName: req.body["projectLeadName"],
        manager: req.body["manager"]
    })

    project.save()
    .then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(500).json({err: error})
    });
};

const deleteOneById = function(req, res) {
    const id = req.params.id;
    Project.deleteOne({_id: id}).exec()
    .then(document => {
        res.status(200).json("Record deleted successfully");
    }).catch(error => {
        res.status(500).json({err: error})
    });
};

module.exports = {
    getAllData, getOneById, saveRecord, deleteOneById
};