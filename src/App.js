import React from 'react';
import './App.css';
import { getAuth } from "firebase/auth";
import Auth from './Auth'
import { ProtectedRoute } from './components/ProtectedRoute';
import Pagina from './Pagina';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  const auth =  getAuth();
  const use = auth.currentUser;
  


  
  return (
    <BrowserRouter>
    <Routes>   
      <Route exact path="/pagina" element={
      <ProtectedRoute use={use}> 
        <Pagina/>
      </ProtectedRoute>
        }/>
      <Route exact path="/" element={<Auth/>} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
