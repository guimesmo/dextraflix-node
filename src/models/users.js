const mongoose = require('../database/index.js');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    description: {
        type: String,
        required: true
    },
    pictureUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
