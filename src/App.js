import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/register' element={  <Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>


    </Routes>
   </Router>
  
  
   </>
  );
}

export default App;
