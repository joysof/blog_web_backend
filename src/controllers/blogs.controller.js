
const { blogService } = require('../services')
const response = require('../config/response')
const httpStatus = require("http-status")
const ApiError = require('../utils/ApiError')


// create a new blog
const createBlog = async (req, res) => {
  try {
    const blogBody = req.body
    const user = req.user.id
    const blog = await blogService.createBlog(user, blogBody)
    res.status(201).json({ success: true, data: blog })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// get all Blogs 

const getBlogs = async (req,res) =>{
  const blogs = await blogService.getBlogs()
  res.json(blogs)
}
const getBlogById = async (req,res) =>{
  const data = await blogService.getBlogById(req.params.id)
  
  res.status(httpStatus.OK).json(
    response({
      message : "single blog",
      status : "OK",
      statusCode: httpStatus.OK,
      data
    })
  )
}

module.exports ={
    createBlog,
    getBlogs,
    getBlogById
}