import React, { useEffect, useState } from "react";
import {
Box,
Button,
TextField,
Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Init = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleSubmit = async (e) => {
e.preventDefault();

const apiUrl = `http://localhost:3100/api/v1/users/${email}/${password}`;
console.log("URL de la solicitud:", apiUrl);

const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
});

if (response.status === 200) {
    navigate("/Init");
    console.log("Inicio de sesión");
} else {
    console.log("Inicio de sesión fallido");
}
};


return (
<div className="body-registro">
    <div className="container-registro">
        <h1>hola Juan Esteban</h1>
    </div>
</div>
);
};