const { blogService } = require('../services')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')

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

module.exports ={
    createBlog,
    getBlogs
}