const express = require('express');
const router = express.Router();
const postsCtrl =  require('../controllers/posts')

router.get('/post',index.postsCtrl)
router.post('/post',creatPost.postsCtrl)
module.exports = router;
