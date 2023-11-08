import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './components/context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>

        <App />
   
    </ContextProvider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import  {BrowserRouter, Route, Routes}  from 'react-router-dom';
// import ContextProvider from './components/context/ContextProvider';
// // import reportWebVitals from "./reportWebVitals";
// // import { Route,Routes } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ContextProvider>
//         <App />
//     </ContextProvider>
//   </React.StrictMode>,
  
// );

// reportWebVitals();



// Set up your index.js file similar to this

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );