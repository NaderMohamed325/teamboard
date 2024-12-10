const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must have a name"]
    },
    email: {
        type: String,
        required: [true, "User must have an email"],
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: [false, "Optional"],
    },
    university: {
        type: String,
        required: true,
    },
    technicalCommittee: {
        type: Boolean,
        required: [false, "Optional"],
    },
    nonTechnicalCommittee: {
        type: Boolean,
        required: [false, "Optional"],
    }
});

const user = mongoose.model('Users', userschema);
module.exports = user;