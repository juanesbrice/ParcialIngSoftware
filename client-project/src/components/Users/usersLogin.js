import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const UsersLogin = () => {
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
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
            <Typography variant="h5" align="center">
              Iniciar Sesión
            </Typography>
            <TextField
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Correo electrónico"
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />

            <Box display="flex" justifyContent="space-between" marginTop="16px">
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Iniciar Sesión
              </Button>
              <Button variant="contained" color="secondary" type="submit">
                Cancelar
              </Button>
            </Box>
          
        </Box>
      </div>
    </div>
  );
};