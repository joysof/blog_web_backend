const express = require ("express")
const auth = require ("../../middlewares/auth")
const {blogController} = require("../../controllers")
const blogRoute = express.Router()

blogRoute.post('/', auth(), blogController.createBlog)


module.exports = blogRoute