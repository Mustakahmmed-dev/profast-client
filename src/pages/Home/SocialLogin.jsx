import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const {signInWithGoogle} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate()
    // console.log("from google log", location)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate(location.state)
            toast.success("Google login successful!")
        }).catch(error => toast.error(error.message))
    }

    return(
        <button onClick={handleGoogleSignIn} className="btn "> <FaGoogle size={28} /> Login with Google</button>

    )
}

export default SocialLogin;