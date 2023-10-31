const userModel = require('../models/user');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'juanesbrice977@gmail.com',
      pass: 'nsgr qwgk nrqz pcdm',
    },
  });

  function sendConfirmationEmail(email, userId) {
    // Aquí usaremos el userId para crear un enlace a la página UsersLogin.
    const confirmationLink = `http://localhost:3000/UsersLogin?userId=${userId}`;
    const mailOptions = {
      from: 'juanesbrice977@gmail.com',
      to: email,
      subject: 'Confirma tu correo electrónico',
      html: `<a href="${confirmationLink}"> <-------- CLICK AQUI</a> para confirmar tu correo electrónico.`,
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
      const newUser = new userModel({ ...userData });
      await newUser.save();
      sendConfirmationEmail(newUser.email, newUser._id); // Pasamos el userId
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
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
        const { email, password } = req.params;

        // Busca un usuario por email y contraseña en la base de datos
        const response = await userModel.findOne({ email, current_password: password });

        if (!response) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
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




