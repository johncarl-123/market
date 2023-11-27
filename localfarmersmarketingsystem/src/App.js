import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./pages/Login";
import Marketplace from './productList/Marketplace';
import UserDashboard from './components/UserDashBoard.js';
import SignUp from './pages/SignUp.js';
import Settings from './components/Settings.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';


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
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/userdashboard/settings" exact element={<Settings />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>       
        <Footer />
      </Router>
    
     
    
    </div>
  );
}

export default App;
