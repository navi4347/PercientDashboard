import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import './Style.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const loginResponse = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        const token = loginData.token;
        sessionStorage.setItem('token', token);
        navigate('/Portal');
      }
    } catch (err) {
      console.error('Error:', err);
      setToken('');
      setError('Invalid credentials! Please try again later.');
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    <div className='Center'>
      <div className="loginform">
      <h4>Sign in to your account</h4>
        <form onSubmit={handleLogin}>
          <div>
            <TextField
              label='Username'
              type='text'
              id='username'
              name='username'
              variant="standard"
              className='kgf'
              value={username}
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <TextField
              label='Password'
              variant="standard"
              type='password'
              name='password'
              id='password'
              className='kgf'
              value={password}
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className='kgf' variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </form>
        <br />
        {token && <p>Token: {token}</p>}
        {error && <p className='error-message'>{error}</p>}
      </div>
    </div>
    </Box>
    </>

  );
}

export default LoginForm;
