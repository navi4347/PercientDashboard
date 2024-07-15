import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
    <Routes>  
    <Route path="/" element={<Login />} />
    <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App   