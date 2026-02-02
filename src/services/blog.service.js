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
    if (!blog) {
        throw new ApiError(httpStatus.NOT_FOUND , "Blog not found")
    }
    return blog
}

// update blog only own blog 

const updateBlog = async (blogId , userId , updateBody) =>{
  const blog = await Blogs.findById(blogId)
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND , "Blog not found")

  }
  if (blog.user_id.toString() !== userId.toString()) {
    throw new ApiError(httpStatus.UNAUTHORIZED , "You are not allow for this blog update")
  }
  Object.assign(blog , updateBody)
  await blog.save()

  return blog
}

// delete blog by  id 

const deleteBlogById = async (blogId , userId) =>{
    const blog = await findOne({
        _id : blogId,
        user_id : userId,
        isDeleted : false
    })

    if (!blog) {
        throw new ApiError(httpStatus.NOT_FOUND , "blog not found")
    }
    blog.isDeleted = true
    await blog.save()

    return blog
}
module.exports ={
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlogById
}