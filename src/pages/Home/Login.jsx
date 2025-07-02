import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../hooks/useAuth";

const Login = () => {
    const {register, handleSubmit } = useForm();
    const {signInUser} = UseAuth();

    const onSubmit = data => {
        console.log(data);
        signInUser(data.email, data.password)
        .then(result => {
            console.log("Login successful ", result)
        }).catch(error => console.log(error))
    }

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <div className="px-4 pt-4">
                <h1 className="text-xl font-bold">Welcome Back </h1>
                <p> Login with ProFast </p>
            </div>

            <div className="card-body">
               <form onSubmit={handleSubmit(onSubmit)}>
                 <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email")} className="input w-full" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" {...register("password", {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" className="btn mt-4 bg-[#CAEB66]">Login</button>
                    <p className="text-center border">Don't have an account, please <Link to="/register" className="text-blue-500 font-bold underline"> Register </Link> </p>
                    <p className="text-center">Or</p>
                    <SocialLogin />
                </fieldset>
               </form>
            </div>
        </div>
    )
}

export default Login;