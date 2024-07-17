import logo from '../assets/logo.png';
import { Favorite } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';

function HeaderTop() {
  return (
    <div className="header-top">
      <img src={logo} alt="Logo" className="logo" style={{ height: 52 }} />
      <div className='d-none d-lg-block'>
      <Box className="header-text" display="flex" alignItems="center">
        <Typography variant="h6">We</Typography>
        <Favorite style={{ color: '#9f47d1', margin: '0 8px' }} />
        <Typography variant="h6">Percient Technologies Private Limited</Typography>
      </Box>
      </div>
    </div>
  );
}

export default HeaderTop;
