import { Navigate } from "react-router-dom"



export const ProtectedRoute = ({use , children}) =>{

if(!use)
{
    return <Navigate to="/" />
}
    return children
}