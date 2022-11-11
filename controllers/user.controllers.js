const {User, sequelize} = require('../models');
const bcrypt = require('bcryptjs');
const { QueryTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const detenv = require('dotenv');
const gravatar = require('gravatar');
detenv.config()


//[POST] /users/register
const register = async (req, res, next) => {
    
    try{
        const salt = bcrypt.genSaltSync(10)
        const {name, email, password, numberPhone} = req.body;
        const hashPassword = bcrypt.hashSync(password, salt)
        const avatar = gravatar.url(email, { s : '100' ,  r : 'x' ,  d : 'retro' } ,  true)
        
        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            numberPhone,
            avatar,
        })
        res.status(201).send(newUser)
    } 
    catch(error) {
        res.status(500).send(error)
    }
}

//[POST] /users/login

const login  = async (req, res) => {
    
    try{
        const user = await User.findOne({where: {email: req.body.email}})

        if(user){
            const isAuth = bcrypt.compareSync(req.body.password, user.password)
            console.log(isAuth)
            if(isAuth) {
                const token = jwt.sign({email: user.email, type:user.type}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '90000s'})
                res.status(200).send({message: 'Dang nhap thanh cong', token,})
            }
            else{
                res.status(500).send({message: 'Dang nhap that bai'})
            }
        }
        else{
            res.status(404).send({message: 'Khong tim thay email phu hop'})
        }
    }catch(err) {
        res.status(500).send(err)
    }
}

const uploadAvatar = async function(req,res,next){
   try{
    const file = req.file
    const urlImage = `http://localhost:3000/${file.path}`
    const {user} = req
 
    const userFound = await User.findOne({where: {email:user.email}})
    userFound.avatar = urlImage
    await userFound.save()
    if(userFound) {
        res.send(userFound)
    }
   }
   catch(err){
    res.status(500).send(err)
   }
}

//[GET] users/allTrip
const getAllTrip = async (req, res) => {
   try{
    const TripsOfUser = 
    await sequelize.query(`SELECT users.name as username, stations.name as fromStatation, S.name as toStatation
    FROM ((users 
    INNER JOIN tickets ON users.id = tickets.userID
    INNER JOIN trips ON trips.id = tickets.tripID
    INNER JOIN stations ON stations.id = trips.fromStationID)
    INNER JOIN stations AS S ON S.id = trips.toStationID)`, { type: QueryTypes.SELECT })
    res.status(200).send(TripsOfUser)
   }catch(err) {
       res.status(500).send(err)
   }

}
module.exports = {register, login, uploadAvatar, getAllTrip}
