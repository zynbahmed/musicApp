const express = require('express');
const router = express.Router();
const postsCtrl =  require('../controllers/posts')

router.get('/posts',postsCtrl.index)
router.post('/posts',postsCtrl.creatPost)


module.exports = router;
