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
    <Typography variant="h5" align="center" style={{ marginBottom:'20px'}}>
        <h2>Registro</h2>
    </Typography>
    <TextField
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleInputChange}
        placeholder="Nombre"
        required
        style={{ marginBottom:'20px'}}
    />
    <TextField
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
        placeholder="Apellido"
        required
        style={{ marginBottom:'20px'}}
    />

<TextField
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Correo electronico"
        required
        style={{ marginBottom:'20px'}}
    />

    <TextField
        type="text"
        name="telephone_number"
        value={formData.telephone_number}
        onChange={handleInputChange}
        placeholder="Numero de Telefono"
        required
        style={{ marginBottom:'20px'}}
    />

<TextField
        type="text"
        name="current_password"
        value={formData.current_password}
        onChange={handleInputChange}
        placeholder="Contraseña"
        required
        style={{ marginBottom:'20px'}}
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
        POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES 
CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS, PROVEEDORES Y VISITANTES

ENTRADA EN VIGENCIA: OCTUBRE DE 2023
ÚLTIMA VERSIÓN: OCTUBRE DE 2023

INTRODUCCIÓN
Nombre pág. S.A.S. (en adelante, Nombre pág) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante, los Titulares).

En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de Nombre pág así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.

La aceptación de propuestas, la celebración de contratos, el diligenciamiento de formatos, el acceso a los Servicios de la página web www.nombrepág.co (en adelante la Página Web) y/o la aceptación expresa o inequívoca de las presente políticas, implica la aceptación de los Titulares de la Política de Tratamiento y Protección de Datos Personales y su autorización para los usos y otros tratamientos que aquí se describen.
        
DEFINICIONES
Para los efectos de la presente Política de Privacidad, se entiende por:
1.1. Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
1.2. Dato público: Dato personal que no es semiprivado, privado o sensible. Entre otros, son los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros y documentos públicos.
1.3. Dato Privado: Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.
1.4. Dato personal sensible: Se entiende como datos sensibles aquellos que afecten la intimidad del titular o cuyo uso indebido pueda afectar la intimidad del Titular o la potencialidad de generar su discriminación.
1.5. Dato personal semiprivado: son aquellos datos que no tienen una naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular, sino a un grupo de personas o a la sociedad en general. En este caso, para su Tratamiento se requiere a autorización expresa del Titular de la información. Por ejemplo: datos de carácter financiero, datos relativos a las relaciones con las entidades de seguridad social (EPS, AFP, ARL, Cajas de Compensación).
1.6. Base de Datos: Conjunto organizado de Datos Personales que sea objeto de Tratamiento. Para los efectos del presente documento se entiende como Base de Datos, aquella que contiene información de los Titulares.
1.7. Titular: Persona natural cuyos Datos Personales sean objeto de Tratamiento. Para los efectos del presente documento se entiende como Titulares, a los proveedores, contratistas, colaboradores, clientes, usuarios y visitantes de Nombre Pág.
1.8. Responsable del Tratamiento: Es la Persona natural o jurídica de naturaleza pública o privada, que, actuando por ella misma o con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos. Para los efectos de la presente Política para el Tratamiento de Datos Personales se entiende como Responsable del Tratamiento a Nombre Pág.
1.9. Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento (Nombre Pág).
1.10. Tratamiento: Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.
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