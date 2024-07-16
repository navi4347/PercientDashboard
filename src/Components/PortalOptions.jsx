import { Card, CardContent, Typography, Box, useMediaQuery } from '@mui/material';
import { People, MonetizationOn, Policy } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function PortalOptions() {
  const navigate = useNavigate();

  const cardStyle = {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className='Center'>
      <Box 
        display="flex" 
        flexDirection={isMobile ? "column" : "row"} 
        justifyContent="center" 
        gap={isMobile ? 2 : 6}
      >
        <Card style={cardStyle} onClick={() => navigate('/Hrm')}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%" flexDirection="column">
              <People fontSize="large" />
              <Typography variant="h6">HRM</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card style={cardStyle}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%" flexDirection="column">
              <MonetizationOn fontSize="large" />
              <Typography variant="h6">Payroll</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card style={cardStyle}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%" flexDirection="column">
              <Policy fontSize="large" />
              <Typography variant="h6">Policies</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default PortalOptions;
