import React, { } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function Pagina()
{
    const auth =  getAuth();
   const use = auth.currentUser;
   
    let navigate=useNavigate();
    const logout = async ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
       
        navigate("/auth")
        console.log("Usuario salkio")
        }).catch((error) => {
        // An error happened.
        });
    }
    
  const mostrar = ()=>{
    console.log(use.email);
  }
   
    return (
        <div>
            HOLA
            <button onClick={logout}>Cerra sesión</button>
            
        </div>
    );
}

export default Pagina;