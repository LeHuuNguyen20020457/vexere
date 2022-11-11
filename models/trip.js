'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Station,Ticket}) {
      // define association here
      this.belongsTo(Station, {foreignKey: 'fromStationID',as: 'from' })
      this.belongsTo(Station, {foreignKey: 'toStationID', as: 'to'})
      this.hasMany(Ticket, {foreignKey: 'tripID'})
    }
  }
  Trip.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};