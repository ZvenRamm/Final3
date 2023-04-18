import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default (props)=>{
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    let navigate=useNavigate();
    const auth =  getAuth();
    const use= auth.currentUser;
    // const user = auth.currentUser;
    const crearUsario = async()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
           
          console.log()
          // ...
        })
        .catch((error) => {
         
          // ..
        });  
    }
    
    const iniciarSesion = async()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
       
          
            navigate("/pagina")
          
        console.log("Usuario entro")
          // ...
        })
        .catch((error) => {
          console.log("error")
        });
       }
      const recuperarContraseña = () =>{
        let emailPrueba = document.querySelector('#email').value;
        sendPasswordResetEmail(auth, emailPrueba)
        .then(() => {
            console.log(emailPrueba);
           alert('Se ha enviado un correo')
        })
        .catch((error) => {
            console.log("error")
            // ..
        });
      }

      
return(
    <div>
        {
        <div>
            <label htmlFor="email">Correo </label>
            <input type="email" id="email" onChange={(ev)=> setEmail(ev.target.value)}></input>
            <label htmlFor="email">Contraseña </label>
            <input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)}></input>
            <button onClick={iniciarSesion}>Iniciar Sesión</button>
            <button onClick={crearUsario}>Crear Usuario</button>
            <button onClick={recuperarContraseña}>Recuperar Contraseña</button>
        </div>
        }
        
        
        
    </div>

)
}