const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    token: String,
    pictures: {
        type: Object,
    },
    theme: {
        primaryColor: String,
        secondaryColor: String,
        emphasizeColor: String,
        polygonHeight: Number,
        polygonWidth: Number,
        polygonOpacity: Number,
    }
}, { timestamps: true });
module.exports = mongoose.model("user", user);