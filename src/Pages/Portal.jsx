import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../Components/HeaderTop';
import PortalOptions from '../Components/PortalOptions';

const Portal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const token = sessionStorage.getItem('token');

    // if (!token) {
    // navigate('/');
    // return;
    // }
  }, [navigate]);

  return (
    <div>
      <HeaderTop />
      <PortalOptions />
    </div>
  );
};

export default Portal;
