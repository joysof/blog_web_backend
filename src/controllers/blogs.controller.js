const { blogService } = require('../services')
const response = require('../config/response')
const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const { Blogs } = require('../models')

// create a new blog
const createBlog = async (req, res) => {
  try {
    const blogBody = req.body
    const user = req.user.id

    if(req.file){
      blogBody.image = req.file.filename
    }
    const blog = await blogService.createBlog(user, blogBody)
    res.status(201).json({ success: true, data: blog })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

// get all Blogs

const getBlogs = async (req, res) => {
  const blogs = await blogService.getBlogs()
  res.json(blogs)
}
const getBlogById = async (req, res) => {
  const data = await blogService.getBlogById(req.params.id)

  res.status(httpStatus.OK).json(
    response({
      message: 'single blog',
      status: 'OK',
      statusCode: httpStatus.OK,
      data,
    }),
  )
}

// update blog only own blog

const updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(
      req.params.id,
      req.user.id,
      req.body,
    )
    res.json(blog)
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

// deleted blog

const deleteBlogById = async (req, res) => {
  const data = await blogService.deleteBlogById(req.params.blogId, req.user.id)
  res.status(httpStatus.OK).json(
    response({
      message: 'Delete Blog',
      status: 'OK',
      statusCode: httpStatus.OK,
      data,
    }),
  )
  
}
module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlogById
}
