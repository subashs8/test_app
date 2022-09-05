const mongoose = require('mongoose');
const schema = mongoose.schema;

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
	productName: {type: String, required: true},
    tag: {type: String, default: "000/000/0000"},
    productType: {type: String, default: 'Phone'},
    brand: {type: String, require: true}
});

module.exports = mongoose.model('Product', productSchema);
