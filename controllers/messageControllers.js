const Message = require("../model/Message");

const sendMessageController = async(req,res) => {
try {
    const {recipientId, message} = req.body;
    const newMessage = await Message.create({
        senderId: req.user.id,
        recipientId,
        message
    });

    res.status(201).send(newMessage);
} catch (error) {
    res.status(500).send({error:error.message});
}
};

const getMessageController = async(req, res) => {
    try {
        const messages = await Message.findAll({where: {recipientId: req.user.id}});
        res.status(200).send({messages});
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};



module.exports = {sendMessageController, getMessageController };