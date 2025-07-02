import { useForm } from "react-hook-form";
import { Link } from "react-router";
import UseAuth from "../hooks/useAuth";
import SocialLogin from "../pages/Home/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = UseAuth();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            console.log(result)
        }).catch(error => console.log(error))
    }

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <div className="px-4 pt-4 ">
                <h1 className="text-xl md:text-3xl my-3 font-bold text-center">Create an Account </h1>
                <p> Register with ProFast </p>
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <button>Profile icon </button>
                        <label className="label">Name </label>
                        <input type="text" {...register("name")} className="input w-full" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input w-full" placeholder="Email" />
                        {
                            errors.email?.type === 'required' &&
                            <p className="text-red-500">Email is required</p>
                        }

                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="input w-full" placeholder="Password" />
                        {
                            errors.password?.type === 'required' &&
                            <p className="text-red-500">Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' &&
                            <p className="text-red-500">Password must be more than six characters</p>
                        }

                        <button type="submit" className="btn mt-4 bg-[#CAEB66]">Register</button>
                        <p>Have an account, please <Link to="/login" className="text-blue-500 font-bold underline"> Login </Link> </p>
                        <p className="text-center">Or</p>
                        <SocialLogin />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;