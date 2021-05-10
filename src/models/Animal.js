// import {Model} from {sequelize};
const {Model,DataTypes} = require('sequelize');
import sequelize from '../config/database';
class Animal extends Model{}
    Animal.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            class: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'Animal',
        },
    );
    
export default Animal