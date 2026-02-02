
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    category : {
        type  : String,
        required : true,
        default : "All"
    },
    time : {
        type : Date,
        default : Date.now
    },
    user_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    }
},  { timestamps: true })

module.exports = mongoose.model("Blog", blogSchema);