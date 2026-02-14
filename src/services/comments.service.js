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

const getBlogComments = async (blogId) =>{
    const comment = await Comments.find({
        blog_id : blogId,
        isDeleted : false
    })
    .populate("user_id" , "name email")
    .sort({createdAt: -1})
    return comment
}
const deleteComment = async (commentId , userId) =>{
    const comment = await Comments.findOne({
        _id : commentId,
        isDeleted : false
    })
    if(!comment){
        throw new ApiError(httpStatus.NOT_FOUND , "Comment not found")
    }
    // check the owner
    if(comment.user_id.toString() !== userId.toString()){
        throw new ApiError(
            httpStatus.FORBIDDEN, "You are not allowed to delete this commint"
        )
    }
    comment.isDeleted = true
    await comment.save()
    return comment
}
module.exports = {
    createComments,
    getBlogComments,
    deleteComment
}