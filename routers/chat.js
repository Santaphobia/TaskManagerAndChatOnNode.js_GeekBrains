const express = require('express');
const controllers = require('../controllers')

const router = express.Router();

router.get('/:chat', controllers.chat.getChat);

module.exports = router;