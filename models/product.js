const mongoose = require('mongoose');

const Product = mongoose.model('Product', { name: String });


module.exports = Product;
