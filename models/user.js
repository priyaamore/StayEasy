const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const passportLocalMongoosePlugin = passportLocalMongoose.default || passportLocalMongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoosePlugin);

module.exports = mongoose.model("User", userSchema);