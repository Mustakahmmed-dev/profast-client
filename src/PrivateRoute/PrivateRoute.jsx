import { Navigate } from "react-router";
import Loader from "../components/Loader";
import UseAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();

    if (loading) {
        <Loader />
    }
    if (!user) {
        <Navigate to="/login"></Navigate>
    }

    return children;
}

export default PrivateRoute;