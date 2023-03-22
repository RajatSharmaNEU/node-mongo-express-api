const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        //match: [/[a-zA-Z]+/, "enter valid name"]
        // match: [/^[a-zA-Z ]+$/, "Please enter a valid name"]
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})