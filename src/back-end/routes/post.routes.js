const Router = require('express')
const router = new Router()
const PostController = require('../controller/post.controller')
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUsers)


module.exports = router