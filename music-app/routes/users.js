const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/profile', usersCtrl.showProfile);
router.put('/:id',usersCtrl.updaterole)

router.post('/like-song', usersCtrl.likeSong);

module.exports = router;
