const express = require('express');
const router = express.Router();
const postsCtrl =  require('../controllers/posts')

router.get('/posts',postsCtrl.index)
router.post('/posts',postsCtrl.creatPost)
router.delete('/posts/:id',postsCtrl.deletePost)
router.get('/posts/:id/edit',postsCtrl.edit)
router.put('/posts/:id',postsCtrl.editPost)

router.post('/posts/:id/like',postsCtrl.like)
router.post('/posts/:id/comments',postsCtrl.addComment)

module.exports = router;
