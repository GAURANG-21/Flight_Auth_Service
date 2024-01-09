const express = require('express');
const UserController = require('../../controllers/user-controller')
const {AuthRequestValidator,EmailValidator} = require('../../middlewares/index')
const router = express.Router();

router.post('/signup',
            AuthRequestValidator.validateUserAuth,
            EmailValidator.verify,
            UserController.create)
            
router.post('/signin', 
            AuthRequestValidator.validateUserAuth,
            EmailValidator.verify,
            UserController.signIn)

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

module.exports = router