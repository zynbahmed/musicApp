const express = require('express');
const router = express.Router();
const postsCtrl =  require('../controllers/posts')

router.get('/posts',postsCtrl.index)
router.post('/posts',postsCtrl.creatPost)
router.delete('/posts/:id',postsCtrl.deletePost)

router.post('/posts/:id/like',postsCtrl.like)
router.put('/posts/:id',postsCtrl.editPost)
module.exports = router;
