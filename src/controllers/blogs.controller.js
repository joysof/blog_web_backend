const { blogService } = require('../services')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')

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

module.exports ={
    createBlog
}