const userModel = require('../models/user');

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData)
        const newUser = new userModel({ ...userData });
        console.log(newUser);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        //console.log(req,params.id);
        //console.log(id);
        const response = await userModel.findById(id);
        console.log(response);
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userDataEdit = req.body;
        const response= await userModel.findByIdAndUpdate(id,userDataEdit);
        res.status(200).json( {message: "Actualización exitosa"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteUserById= async(req,res)=>{
    try {
        const { id } = req.params;
        const response = await userModel.findByIdAndDelete(id);
        res.status(200).json( {message: "Uusario eliminado exitosamente"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}



