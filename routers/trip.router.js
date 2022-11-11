const express = require('express');
const tripRouter = express.Router()

const {getAllTrip, createTrip, deleteTrip, updateTrip} = require('../controllers/trip.controllers')

tripRouter.post('/', createTrip)
tripRouter.get('/', getAllTrip)
tripRouter.delete('/:id', deleteTrip)
tripRouter.put('/:id', updateTrip)
module.exports = {tripRouter,}