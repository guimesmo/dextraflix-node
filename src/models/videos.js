const mongoose = require('../database/index.js');

const VideoSchema = new mongoose.Schema({
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
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
