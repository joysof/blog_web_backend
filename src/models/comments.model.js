const mongoose = require ('mongoose')

const commentsSchema = mongoose.Schema({
    comment : {
        type : String,
        required : true,
        trim : true
    },
    blog_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Blog",
        required : true
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true 
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    time : {
        type : Date ,
        default : Date.now
    }
},{timestamps : true})

module.exports = mongoose.model("comment", commentsSchema)