const {Router} = require('express');
const auth = require('../middelwares/auth');
const { sendMessageController, getMessageController } = require('../controllers/messageControllers');

const router = Router();

// Post Messages
router.post('/' , auth, sendMessageController);

// Get Messages
router.get('/', auth, getMessageController);

module.exports = router;