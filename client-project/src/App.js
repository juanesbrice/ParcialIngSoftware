import { Users } from "./components/Users/users";
import { UsersLogin } from "./components/Users/usersLogin";
import { Login } from "./components/Users/Login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import "./App.scss"


function App() {
  return (
    <div className="App">
      <Router>
      <div >
        <Link to="/UsersLogin">
        <Button variant="contained" color="primary" style={{ marginRight:'500px'}}>
          Login
        </Button>
        </Link>
        <Link to="/">
        <Button variant="contained" color="secondary">
          Registrarse
        </Button>
        </Link>

        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/UsersLogin" element={<UsersLogin />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
