import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import Login from './pages/Login/Userlogin';
import Powerbi from './pages/powerbi';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/powerbi'  element={<Powerbi/>}></Route>
      </Routes>
    </>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Headers/Headers";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Userlogin";
// import Home from "./pages/Home/Home";
// import Profile from "./pages/Profile/Profile";
// import ProtectedRoute from "./pages/Protected/Protectedroute";

// function App() {
//   // Replace this logic with your authentication logic
//   const isAuthenticated = /* logic to check if user is authenticated */ true;

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Routes */}
//           <ProtectedRoute
//             path="/admin"
//             element={<Home />}
//             isAuthenticated={isAuthenticated}
//           />
//           <ProtectedRoute
//             path="/userprofile/:id"
//             element={<Profile />}
//             isAuthenticated={isAuthenticated}
//           />
          
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
