const express = require ("express")
const auth = require ("../../middlewares/auth")
const {blogController} = require("../../controllers")
const blogRoute = express.Router()


blogRoute.get('/', blogController.getBlogs)
blogRoute.get('/:id', blogController.getBlogById)


blogRoute.post('/', auth(), blogController.createBlog)
blogRoute.put('/:id', auth(), blogController.updateBlog)
blogRoute.delete('/:blogId', auth(), blogController.deleteBlogById)


module.exports = blogRoute