const express = require ("express")
const auth = require ("../../middlewares/auth")
const {blogController} = require("../../controllers")
const multerSetup = require('../../middlewares/fileUpload')
const path = require("path")
const blogRoute = express.Router()
const UPLOADS_FOLDER = path.join(__dirname, "../../uploads/blogsImage");
const upload = multerSetup(UPLOADS_FOLDER);






blogRoute.get('/', blogController.getBlogs)
blogRoute.get('/:id', blogController.getBlogById)


blogRoute.post('/', auth(), upload.single("image"), blogController.createBlog)
blogRoute.put('/:id', auth(), blogController.updateBlog)
blogRoute.delete('/:blogId', auth(), blogController.deleteBlogById)


module.exports = blogRoute