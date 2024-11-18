const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnection");
const User = require("./User");

const Message = sequelize.define("Message", {
    senderId: { type: DataTypes.INTEGER, allowNull: false },
    recipientId: { type: DataTypes.INTEGER, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
});

Message.belongsTo(User, {as :'Sender', foreignKey: 'senderId'});
Message.belongsTo(User, {as :'Recipient', foreignKey: 'recipientId'});

module.exports = Message;