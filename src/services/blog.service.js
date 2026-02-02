const {Blogs} = require ( "../models")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status")



// create a new blog 
const createBlog = async (user , blogBody) =>{
    return Blogs.create({...blogBody , user_id : user})
}

// get all blog 

const getBlogs = async () =>{
    return Blogs.find().populate("user_id" , "name email photo")
}

module.exports ={
    createBlog,
    getBlogs
}