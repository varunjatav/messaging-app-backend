const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const User = sequelize.define('User',{
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('Teacher', 'Student', 'Institute'), allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;