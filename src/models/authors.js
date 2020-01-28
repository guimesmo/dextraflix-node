const mongoose = require('../database/index.js');

const AuthorSchema = new mongoose.Schema({
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

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
