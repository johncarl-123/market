import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./pages/Login";
import Marketplace from './productList/Marketplace';
import UserDashboard from './components/UserDashBoard.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<LoginForm />} />
          <Route path="/marketplace" exact element={<Marketplace />} />
          <Route path="/userdashboard" exact element={<UserDashboard />} />
        </Routes>
        
        <Footer />
      </Router>
    
     
    
    </div>
  );
}

export default App;
