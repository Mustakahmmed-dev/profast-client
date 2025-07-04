import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";
import UseAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();

    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <Loader />
    }
    if (!user) {
       return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children;
}

export default PrivateRoute;