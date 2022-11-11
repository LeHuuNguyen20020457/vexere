const express = require('express');
const registerRouter = express.Router()

const {register, login,uploadAvatar,getAllTrip } = require('../controllers/user.controllers')
const {uploadImage} = require('../middlewares/uploadImage')
const {authentication} = require('../middlewares/authentication')
registerRouter.post('/register', register)
registerRouter.post('/login', login)
registerRouter.get('/allTrip', getAllTrip)

//upload file

registerRouter.post('/upload-avatar',authentication, uploadImage('avatars'), uploadAvatar)
module.exports = {registerRouter}
