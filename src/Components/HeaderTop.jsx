import logo from '../assets/logo.png';
import { Favorite } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';

function HeaderTop() {
  return (
    <div className="header-top">
      <img src={logo} alt="Logo" className="logo" />
      <Box display="flex" alignItems="center">
      <Typography variant="h6">We</Typography>
      <Favorite style={{ color: 'purple', margin: '0 8px' }} />
      <Typography variant="h6">Percient Technologies Private Limited</Typography>
    </Box>
    </div>
  );
}

export default HeaderTop;
