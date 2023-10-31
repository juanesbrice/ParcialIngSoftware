import React, { useEffect, useState } from "react";
import {
Box,
Button,
Checkbox,
Chip,
Dialog,
DialogContent,
DialogTitle,
DialogContentText,
Grid,
IconButton,
Modal,
TextField,
Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./users.scss"



export const Users = () => {
  const [users, setUsers] = useState([]); // Inicializa el estado con un array vacío

    const url = "http://localhost:3100/api/v1/users";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        telephone_number: '',
        current_password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = () => {
        fetch('http://localhost:3100/api/v1/users/new-user', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
        // Manejar la respuesta si es necesario
        console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
        // Manejar errores si los hay
        console.error('Error al enviar la solicitud:', error);
        });
    };

    useEffect(() => {
        fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((data) => {
            setUsers(data); // Almacena los datos de usuarios en el estado
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        
        <div className="body-registro">
            <div className="container-registro">
            <Box
        component="form"
        sx={{
        display: "flex",
        flexDirection: "column",
    }}
    onSubmit={handleSubmit}
    >
    <Typography variant="h5" align="center">
        Registro
    </Typography>
    <TextField
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleInputChange}
        placeholder="Nombre"
        required
    />
    <TextField
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
        placeholder="Apellido"
        required
    />

<TextField
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Correo electronico"
        required
    />

    <TextField
        type="text"
        name="telephone_number"
        value={formData.telephone_number}
        onChange={handleInputChange}
        placeholder="Numero de Telefono"
        required
    />

<TextField
        type="text"
        name="current_password"
        value={formData.currentpassword}
        onChange={handleInputChange}
        placeholder="Contraseña"
        required
    />

<form>


    <label onClick={handleOpenModal}>
    <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        color="primary"
    />
    Acepto los términos y condiciones
    </label>
    <Dialog open={openModal} onClose={handleCloseModal}>
    <DialogTitle>Terminos y condiciones</DialogTitle>
    <DialogContent>
        <DialogContentText>
        Información sobre terminos y condiciones
        </DialogContentText>
    </DialogContent>
    </Dialog>
</form>

    <div className="botones">
    <Button variant="contained" type="submit" style={{ width: '300px', marginLeft: '20px'}} color='primary' >
        Registrarse
    </Button>
    <Button variant="contained" type="submit" style={{ width: '300px', marginLeft: '50px'}} color='error' >
        Cancelar
    </Button>
    </div>

    </Box>
    </div>
    

    {/*         <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <Typography variant="h6">Usuarios: {user.firstname} , {user.lastname}, {user.email}, {user.current_password}</Typography>
                ))}
            </ul> */}
        </div>
    );
    };