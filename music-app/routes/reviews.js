const express = require('express');
const router = express.Router();
const reviewCtrl =  require('../controllers/reviews')

router.get('/albums/:id/reviews/add',reviewCtrl.addReview)
router.post('/albums/:id/reviews',reviewCtrl.creatReview)



module.exports = router;
