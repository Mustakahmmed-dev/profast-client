import Banner from "../../components/Banner"
import Benefits from "../../components/Benefits"
import HowItWorks from "../../components/HowItWorks"
import Services from "../../components/Services/Services"
import TrustedByClients from "../../components/TrustedByClients"

const Home = () => {
    return(
        <div>
            <Banner />
            <div className="w-12/13 mx-auto space-y-10 mb-10">
            <HowItWorks />
            <Services />
            <TrustedByClients />
            <Benefits />
            </div>
        </div>
    )
}

export default Home