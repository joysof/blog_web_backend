const {Blogs} = require ( "../models")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status")




const createBlog = async (user , blogBody) =>{
    return Blogs.create({...blogBody , user_id : user})
}


module.exports ={
    createBlog
}