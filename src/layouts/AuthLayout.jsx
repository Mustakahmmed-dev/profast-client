import { Outlet } from "react-router";
import ProfastLogo from "../components/ProfastLogo";
import authImg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className="p-5 md:p-12 bg-base-100">
            <div>
                <ProfastLogo />
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img src={authImg} alt="Login in auth image"
                    className="w-full rounded-lg "
                />
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>

        </div>

    )
}

export default AuthLayout;