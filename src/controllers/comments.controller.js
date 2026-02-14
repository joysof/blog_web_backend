const { commentsServices } = require('../services')
const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const response = require('../config/response')
// create a comments

const createComment = catchAsync(async (req, res) => {

    const { blogId } = req.params
    const { comment } = req.body
    const data = await commentsServices.createComments(
      req.user.id,
      blogId,
      comment,
    )
    res.status(httpStatus.CREATED).json(
      response({
        message: 'create a comment',
        status: '201',
        statusCode: httpStatus.OK,
        data
      }),
    )
  
})

const getBlogComments = catchAsync(async (req , res) =>{
  const {blogId} = req.params;
  const data = await commentsServices.getBlogComments(blogId)

  res.status(httpStatus.OK).json(
    response({
      message : "Comments fetched  successfully",
      status : "ok",
      statusCode : httpStatus.OK,
      data
    })
  )
})
module.exports = {
    createComment,
    getBlogComments
}