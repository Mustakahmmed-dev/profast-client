import { Navigate } from "react-router";
import Loader from "../components/Loader";
import UseAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    console.log(user)

    if (loading) {
        return <Loader />
    }
    if (!user) {
       return <Navigate to="/login"></Navigate>
    }

    return children;
}

export default PrivateRoute;