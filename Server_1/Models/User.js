const mon = require('mongoose');

const userSchema = new mon.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        trim: true
    },
    age: {
        type: String,
        required: true,
        trim: true
    },
    goal: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    }
});

module.exports = mon.model("User", userSchema);
