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

// get single blogs by id 

const getBlogById = async (blogId) =>{
    const blog = await Blogs.findById(blogId)
    .populate("user_id" , "name email")
    // if (!blog) {
    //     throw new ApiError(httpStatus.NOT_FOUND , "Blog not found")
    // }
    return blog
}
module.exports ={
    createBlog,
    getBlogs,
    getBlogById
}