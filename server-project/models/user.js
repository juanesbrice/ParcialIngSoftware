const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstname : {
        type: String,
        require: true,
    },
    lastname : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
    },
    telephone_number:{
        type: String,
        require: true,
        unique: true
    },
    current_password : {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
        require: true,
        default: false
    }
});
const User =  mongoose.model("User",UserSchema);
module.exports = User;
