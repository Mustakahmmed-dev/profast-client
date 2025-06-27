import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import profastLogo from '../assets/logo.png'

const Footer = () => {

    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
            <aside>
                <div className="relative">
                    <img className="w-[80px] rounded-full" src={profastLogo} alt="" />
                    <h2 className="text-2xl font-bold absolute top-11 left-14">ProFast</h2>
                </div>
                <p className="font-bold">
                    Providing reliable logistics since 2025
                </p>
                <p> Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link> <FaFacebook size={30} /> </Link>
                    <Link> <FaLinkedin size={30} /> </Link>
                    <Link> <FaGithub size={30} /> </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;