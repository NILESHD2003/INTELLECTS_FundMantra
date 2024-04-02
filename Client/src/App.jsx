
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import OtpPage from './Pages/OtpPage';
import { login, logout,selectIsLoggedIn } from './Slice/userSlice';

import { useDispatch,useSelector } from 'react-redux';
import SingleCollection from './Pages/SingleCollection';
import SingleCompany from './Pages/SingleCompany';

function App() {


const dispatch = useDispatch();


  
  //  const [loggedIn, setLoggedIn] = useState(true);
   const loggedIn = useSelector(selectIsLoggedIn);
  

 
  

  return (
    <div className='app'>
   <Router>
      <Navbar  loggedIn={loggedIn} />
      <Routes>
        {loggedIn ? (
          <>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/:id"
              element={<SingleCollection/>}
            />
            <Route
              path="/singleCompany/:data"
              element={<SingleCompany />}
            />
           
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/otp" element={<OtpPage />} /> 
          </>
        )}
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
    </div>
  );
}

export default App;
