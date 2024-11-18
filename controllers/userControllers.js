const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const regiterationController =  async(req,res) => {
    try {
        const {name, email, phone_number,role, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({name, email, phone_number, role, password: hashedPassword});
        res.status(201).json({
            user,
            message: 'Registration Successful'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const loginController = async(req, res) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) return res.status(404).json({message: "User not found!!"});

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(404).json({message: "Invalid Password!!"});

        const token = jwt.sign({id: user.id,role: user.role}, process.env.JWT_SECRET);
        res.status(200).json({token: token});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getAllUserController = async(req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json({user: user});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getUserByIDController = async(req, res) => {
    try {
        const user = await User. findOne({where: {id: req.params.id}});
        res.status(200).json({user: user});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const deleteUserController = async(req, res) => {
    try {
        const user = await User.destroy({where: {id:req.params.id}});
        res.status(200).json({user: user, message: "User Successfully Deleted !!"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
module.exports = {regiterationController,loginController, getAllUserController, getUserByIDController, deleteUserController}