import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
    const auth = localStorage.getItem("login")
    return auth ? <Outlet></Outlet> : <Navigate to={"/login"}></Navigate>
};

export default ProtectedRoutes;