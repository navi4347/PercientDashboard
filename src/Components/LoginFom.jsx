import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import "./Style.css";
import Footer from "./Footer";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const completeUsername = `${username}@percient.com`;
    try {
      const loginResponse = await fetch("http://127.0.0.1:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: completeUsername, password }),
      });
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        const token = loginData.token;
        sessionStorage.setItem("token", token);
        navigate("/Portal");
      }
    } catch (err) {
      console.error("Error:", err);
      setToken("");
      setError("Invalid credentials! Please try again later.");
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <div className="Center">
          <div className="loginform">
            <Typography variant="h4" style={{ color: "#9f47d1" }}>
              Sign in to your account
            </Typography>
            <form onSubmit={handleLogin}>
              <div>
                <TextField
                  label="Username"
                  type="text"
                  id="username"
                  name="username"
                  variant="standard"
                  className="kgf"
                  value={username}
                  autoComplete="off"
                  onChange={handleUsernameChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span style={{ color: "#9f47d1" }}>@percient.com</span>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  variant="standard"
                  type="password"
                  name="password"
                  id="password"
                  className="kgf"
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                className="kgf"
                variant="contained"
                style={{ backgroundColor: "#9f47d1" }}
                type="submit"
              >
                Login
              </Button>
            </form>
            <br />
            {token && <p>Token: {token}</p>}
            {error && <p className="error-message">{error}</p>}
            <Footer />
          </div>
        </div>
      </Box>
    </>
  );
}

export default LoginForm;
