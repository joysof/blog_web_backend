const {Comments , Blogs} = require('../models')

const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')


// create a comments 

const createComments = async (userId , blogId , commentText) =>{
    const blog = await Blogs.findOne({
        _id : blogId,
        isDeleted : false
    })
    if (!blog) {
        throw new ApiError(httpStatus.NOT_FOUND , "Blog not Found")
    }
    const comment = await Comments.create({
        comment  : commentText,
        blog_id : blogId,
        user_id : userId 
    })
    return comment
}

module.exports = {
    createComments
}