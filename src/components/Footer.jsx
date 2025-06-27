import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {

    return (
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
            <aside>
                <p className="font-bold">
                    ProFast Ltd.
                    <br />
                    Providing reliable logistics since 2025
                </p>
                <p>Copyright © { new Date().getFullYear() } - All right reserved</p>
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