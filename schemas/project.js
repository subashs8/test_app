const mongoose = require('mongoose');
const schema = mongoose.schema;

var projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    projectName: String,
    projectLeadName: { type: String, required: false, default: 'No Lead' },
    manager: String,
});

module.exports = mongoose.model('Project', projectSchema);
