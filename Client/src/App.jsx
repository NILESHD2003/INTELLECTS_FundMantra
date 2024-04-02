
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
function App() {

   const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
  };


  return (
    <div className='app'>
   <Router>
      <Navbar handleLogout={handleLogout} loggedIn={loggedIn} />
      <Routes>
        {loggedIn ? (
          <>
            <Route
              path="/"
              element={<Home/>}
            />
           
          </>
        ) : (
          <>
            <Route path="/" element={<Login handleLogin={handleLogin} />} /> 
            <Route path="/signup" element={<SignUp />} /> 
          </>
        )}
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
    </div>
  );
}

export default App;
