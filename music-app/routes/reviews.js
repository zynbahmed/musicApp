const express = require('express');
const router = express.Router();
const reviewCtrl =  require('../controllers/reviews')

router.get('/review/add',postsCtrl.addReview)



module.exports = router;
