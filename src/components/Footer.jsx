import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import profastLogo from '../assets/logo.png'

const Footer = () => {

    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
            <aside>
                <div className="flex items-center">
                    <img className="w-[80px] rounded-full" src={profastLogo} alt="" />
                    <h2 className="text-3xl font-bold -ml-8 mt-5">ProFast</h2>
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