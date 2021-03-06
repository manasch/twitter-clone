const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    current: {
        type: Boolean,
        required: true,
        default: false
    },
    tweets: [{
        type: String,
        required: false
    }]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
