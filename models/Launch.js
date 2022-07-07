//Import required packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Initialize Favorite model by extending off Sequelize's Model Class
class Launch extends Model {};

//Set up fields and rules for Launch model 
Launch.init ( 
    {
        id: {
            type: DataTypes.CHAR(24),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        success: {
            type: DataTypes.BOOLEAN,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        flight_number: {
            type: DataTypes.INTEGER,
        },
        icon: {
            type: DataTypes.STRING,
        },
        forum: {
            type: DataTypes.STRING, 
        },
        webcast:  {
            type: DataTypes.STRING, 
        },
        wiki: {
            type: DataTypes.STRING,
        },
        rocket_id: {
            type: DataTypes.CHAR(24),
            allowNull: false,
            references: {
                model: 'rocket',
                key: 'id'
            }
        },
    },
    {
        sequelize,  
        freezeTableName: true, 
        underscored: true, 
        modelName: 'launch'
    }
);

//Export Launch model 
module.exports = Launch;