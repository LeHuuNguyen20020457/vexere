const express = require('express');
const rootRouter = express.Router();
const {stationRouter} = require('./station.router.js')
const {registerRouter} = require('./user.router.js')
const {tripRouter} = require('./trip.router.js')

rootRouter.use('/station', stationRouter)
rootRouter.use('/users', registerRouter)
rootRouter.use('/trips', tripRouter)

module.exports = {rootRouter}