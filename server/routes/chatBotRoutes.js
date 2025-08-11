const express = require('express');
const router = express.Router();
const chatBotController = require('../controllers/chatBotController');


router.post('/', chatBotController.sendMessage);

module.exports = router;