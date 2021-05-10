// import {Model} from {sequelize};
const {Model,DataTypes} = require('sequelize');
import sequelize from '../config/database';
class User extends Model{}
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    
export default User