import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {signInWithGoogle} = UseAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log("Google login successful ", result)
        }).catch(error => console.log("Google sign in ", error))
    }

    return(
        <button onClick={handleGoogleSignIn} className="btn "> <FaGoogle size={28} /> Login with Google</button>

    )
}

export default SocialLogin;