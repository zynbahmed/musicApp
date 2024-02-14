const express = require('express');
const router = express.Router();
const reviewCtrl =  require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/albums/:id/', ensureLoggedIn, reviewCtrl.addReview)
router.post('/albums/:id/reviews', ensureLoggedIn, reviewCtrl.creatReview)



module.exports = router;
