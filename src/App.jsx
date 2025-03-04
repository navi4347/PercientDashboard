import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Login from "./Pages/Login";
import Portal from "./Pages/Portal";
import Hrms from "./Pages/Hrm";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Portal" element={<Portal />} />
        <Route path="/Hrms" element={<Hrms />} />
      </Routes>
    </Router>
  );
};

export default App;
