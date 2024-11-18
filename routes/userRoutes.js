const {Router} = require('express');

const { regiterationController, loginController, getAllUserController, getUserByIDController, deleteUserController } = require('../controllers/userControllers');

const router = Router();

// Registration.
router.post('/register',regiterationController);
// Login 
router.post('/login', loginController);
//get all user
router.get('/', getAllUserController);
//get single user
router.get('/:id', getUserByIDController);
//delete a user
router.delete('/:id', deleteUserController);

module.exports = router;