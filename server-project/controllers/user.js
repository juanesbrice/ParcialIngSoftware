const userModel = require('../models/user');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
service: 'Gmail',
auth: {
user: 'juanesbrice977@gmail.com',
pass: 'nsgr qwgk nrqz pcdm',
},
});

function sendConfirmationEmail(email, confirmationLink) {
const mailOptions = {
from: 'juanesbrice977@gmail.com',
to: email,
subject: 'Confirma tu correo electrónico',
html: `Haz clic en este <a href="https://www.youtube.com/">enlace</a> para confirmar tu correo electrónico.`,
};

transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    console.error('Error al enviar el correo de confirmación:', error);
} else {
    console.log('Correo de confirmación enviado:', info.response);
}
});
}

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData)
        const newUser = new userModel({ ...userData });
        console.log(newUser);
        await newUser.save();
        sendConfirmationEmail(newUser.email, );
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



