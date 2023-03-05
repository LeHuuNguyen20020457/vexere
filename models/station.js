'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Trip }) {
            // define association here
            this.hasMany(Trip, { foreignKey: 'fromStationID', as: 'from' });
            this.hasMany(Trip, { foreignKey: 'toStationID', as: 'to' });
        }
    }
    Station.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    len: [2, 30],
                    notEmpty: true,
                },
            },
            address: {
                type: DataTypes.STRING,
                validate: {
                    checkLength(value) {
                        if (value.length < 5 || value.length > 50) {
                            throw new Error('Bạn cần viết đầy đủ tên địa chỉ');
                        }
                    },
                },
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    //chỉ được nhập cái này vào thôi thường được dùng cho select option
                    // isIn: [['HCM', 'Da Nang', 'Ha Noi', 'Thanh Hoa']],
                },
            },
        },
        {
            sequelize,
            modelName: 'Station',
        },
    );
    return Station;
};
