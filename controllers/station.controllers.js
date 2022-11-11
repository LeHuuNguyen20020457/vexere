const  {Station} = require('../models')
const { Op } = require("sequelize");
// [POST] /station
const createStation = async (req, res, next) => {
    
    try{
        
        const {name, address, province} = req.body;
        
        const newStation = await Station.create({
            name,
            address,
            province,
        })
        res.status(201).send(newStation)
    } 
    catch(error) {
        res.status(500).send(error)
    }
}

//[GET] /station
const getAllStation = async (req, res) => {
    const name = req.query.name;
    try{
       if(name) {
            const stationList = await Station.findAll({where: {
                name:{
                    [Op.like]: `%${name}%`
                }
            }});
            res.status(200).send(stationList)
       }
       else{
           res.status(404).send('No Station')
       }

    }
    catch(err) {
        
        res.status(500).send(err)
    }
}

//[GET] /station/:id
const getDetailStation = async (req, res) => {
    try{
        const detailStaion = await Station.findOne({ where: { id: req.params.id } });
        res.status(200).send(detailStaion)

    }
    catch(err) {
        
        res.status(500).send(err)
    }
}
//[PUT] /station/:id
const updateStation = async function(req, res) {

    try{
        const {name, address, province} = req.body
        const detailStaion = await Station.findOne({ where: { id: req.params.id } });
        
        detailStaion.set({
            name,
            address,
            province,
        })
        await detailStaion.save();
        res.status(200).send(detailStaion)
    }
    catch(err) {   
        res.status(500).send(err)
    }
}

//[DELETE] /station/:id
const deleteStation = async (req, res) => {
    try{
        await Station.destroy({where: {id: req.params.id}})
        res.status(200).send('deleted successfully')
    }
    catch(err) {
        res.status(500).send(err)
    }
}


module.exports = {createStation,
                  getAllStation,
                  getDetailStation,
                  updateStation,
                  deleteStation}