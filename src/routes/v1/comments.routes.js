const express = require('express')
const {commentsController} = require('../../controllers')
const auth = require('../../middlewares/auth')
const commentsRoute = express.Router()


commentsRoute.post('/blogs/:blogId' , auth(), commentsController.createComment)
commentsRoute.get('/blogs/:blogId' , auth(), commentsController.getBlogComments)
commentsRoute.delete('/blogs/:commentId' , auth(), commentsController.deleteComment)



module.exports = commentsRoute