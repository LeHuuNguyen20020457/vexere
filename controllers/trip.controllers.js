const res = require('express/lib/response')
const {Trip, Station} = require('../models')

//[POST] /trips
const createTrip = async (req, res, next) => {
  try{
    const {fromStationID, toStationID, startTime, price} = req.body
  
    // res.status(201).send(req.body)
    const newTrip = await Trip.create({ 
                                    fromStationID,
                                    toStationID,
                                    startTime, 
                                    price,
                                      })
    res.status(201).send(newTrip)
  }catch(err) {
    res.status(500).send(err)
  }
}

//[GET] /trips
const getAllTrip = async (req, res, next) => {
  try{
    const trip = await Trip.findAll({
      include: [{
        model: Station,
        as:'from',
      },
      {
        model: Station,
        as:'to',
      }]
    })
    res.status(200).send(trip)
  }catch(err) {
    res.status(500).send(err)
  }
}

//[DELETE] /trips/:id
const deleteTrip = async (req, res, next) => {
  try{
    const id = req.params.id
    await Trip.destroy({where : {id,}})
    res.send('deleted trip')
  }
  catch(err) {
    res.status(500).send(err)
  }
}

//PUT
const updateTrip = async (req, res) =>{
  try{
    const id = req.params.id
    const {fromStationID, toStationID, startTime, price} = req.body
    await Trip.update({fromStationID, toStationID, startTime, price}, {
      where: {
        id,
      }
    })
    res.send('updated successfully')
  }
  catch(err) {
    res.status(500).send(err)
  }
}
module.exports = {
    createTrip,
    getAllTrip,
    deleteTrip,
    updateTrip,
}
