import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Components/HrmDashboard";
const Hrm = () => {
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
      <Dashboard />
    </div>
  );
};

export default Hrm;
