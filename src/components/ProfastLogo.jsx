import { Link } from 'react-router';
import profastLogo from '../assets/logo.png'
const ProfastLogo = () => {
    return (
        <Link to="/">
            <div className="flex items-center">
                <img className="w-[40px] rounded-full" src={profastLogo} alt="Profast logo" />
                <h2 className="text-xl font-bold -ml-2">ProFast</h2>
            </div>
        </Link>
    )
}

export default ProfastLogo;