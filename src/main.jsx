import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home/Home'
// import AOS from 'aos';

// useEffect(() => {
//   AOS.init({
//       duration: 300,
//   });
// }, [])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home />
  </React.StrictMode>,
)
