const mongoose = require('../database/index.js');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: false
    },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
