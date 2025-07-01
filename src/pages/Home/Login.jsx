import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <div className="px-4 pt-4">
                <h1 className="text-xl font-bold">Welcome Back </h1>
                <p> Login with ProFast </p>
            </div>

            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn mt-4 bg-[#CAEB66]">Login</button>
                    <p>Don't have an account, please <Link to="/register" className="text-blue-500 font-bold underline"> Register </Link> </p>
                    <p className="text-center">Or</p>
                    <button className="btn "> <FaGoogle size={28}/> Login with Google</button>
                </fieldset>
            </div>
        </div>
    )
}

export default Login;