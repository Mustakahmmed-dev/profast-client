import Banner from "../../components/Banner"
import BecomeMerchant from "../../components/BecomeMerchant"
import Benefits from "../../components/Benefits"
import FAQ from "../../components/FAQ"
import HowItWorks from "../../components/HowItWorks"
import Services from "../../components/Services/Services"
import Testimonials from "../../components/Testimonials/Testimonials"
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
            <BecomeMerchant />
            <Testimonials />
            <FAQ />
            </div>
        </div>
    )
}

export default Home