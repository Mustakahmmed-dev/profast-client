import amazonLogo1 from '../assets/brands/amazon.png';
import casioLogo from '../assets/brands/casio.png';
import moonstarLogo from '../assets/brands/moonstar.png';
import randstadLogo from '../assets/brands/randstad.png';
import startPeopleLogo1 from '../assets/brands/start-people 1.png';
import startLogo2 from '../assets/brands/start.png';
import amazonVector from '../assets/brands/amazon_vector.png';

const TrustedByClients = () => {
    return (
        <div className="p-10 md:mx-10 rounded-lg bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">Trusted By</h1>
            <marquee behavior="scroll" direction="left" scrollamount="5">
                <div className="flex gap-12 items-center">
                    <img src={amazonLogo1} alt="Amazon" className="h-10 inline-block" />
                    <img src={casioLogo} alt="Casio" className="h-10 inline-block" />
                    <img src={moonstarLogo} alt="Moonstar" className="h-10 inline-block" />
                    <img src={randstadLogo} alt="Randstad" className="h-10 inline-block" />
                    <img src={startPeopleLogo1} alt="Start people" className="h-10 inline-block" />
                    <img src={startLogo2} alt="Start people 2" className="h-10 inline-block" />
                    <img src={amazonVector} alt="Amazon vector 2" className="h-10 inline-block" />
                </div>
            </marquee>
        </div>
    )
}

export default TrustedByClients;