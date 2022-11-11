const express = require("express");
const {checkExist} = require('../middlewares/checkExist')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation } = require('../controllers/station.controllers.js')
const stationRouter = express.Router();
const {Station}  = require('../models')
//mấy cái middleware nên để sang file middleware
stationRouter.get('/:id', getDetailStation)
stationRouter.put('/:id',authentication, authorization(["Admin", "Supber_Admin"]), checkExist(Station) , updateStation)
stationRouter.post("/",authentication,authorization(["Admin", "Supber_Admin"]), createStation)
stationRouter.get('/', getAllStation)
stationRouter.delete('/:id',authentication, authorization(["Admin", "Supber_Admin"]) , checkExist(Station), deleteStation)
module.exports = {stationRouter}