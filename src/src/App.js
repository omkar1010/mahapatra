// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./components/Headers/Headers";
// import Home from "./pages/Home/Home";
// import Register from "./pages/Register/Register";
// import Edit from "./pages/Edit/Edit";
// import Profile from "./pages/Profile/Profile";
// import Login from './pages/Login/Userlogin';
// import Powerbi from './pages/powerbi';
// import { Routes, Route } from "react-router-dom"

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path='/' element={ <Home />} />
//         <Route path='/Register' element={<Register />} />
//         <Route path='/edit/:id' element={<Edit />} />
//         <Route path='/userprofile/:id' element={<Profile />} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='/powerbi'  element={<Powerbi/>}></Route>
//       </Routes>
//     </>
//   );
// }

// export default App;


// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './pages/Login/Userlogin';
// import ProtectedComponent from './ProtectedComponent';
import Home from "./pages/Home/Home";

import { isLoggedIn } from './pages/Auth/Authuser';
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
 import Header from "./components/Headers/Headers";
 import Powerbi from './pages/powerbi';


const App = () => {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route
          path="/"
          element={ <Register />}
        />

        <Route
          path="/Home"
          element={isLoggedIn() ? <Home /> : <Navigate to="/login" />}
        />
       

<Route
          path="/userprofile/:id"
          element={isLoggedIn() ? <Profile /> : <Navigate to="/login" />}
        />



        <Route
          path="/powerbi"
          element={isLoggedIn() ? <Powerbi/> : <Navigate to="/login" />}
        />


      </Routes>
    </Router>
  );
};

export default App;
