const express = require('express');
const router = express.Router();
const postsCtrl =  require('../controllers/posts')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/posts',postsCtrl.index)
router.post('/posts', ensureLoggedIn, postsCtrl.creatPost)
router.delete('/posts/:id', ensureLoggedIn, postsCtrl.deletePost)
router.get('/posts/:id/edit', ensureLoggedIn, postsCtrl.edit)
router.put('/posts/:id', ensureLoggedIn, postsCtrl.editPost)

router.post('/posts/:id/like', ensureLoggedIn, postsCtrl.like)
router.post('/posts/:id/comments', ensureLoggedIn, postsCtrl.addComment)

module.exports = router;
