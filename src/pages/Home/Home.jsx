import Banner from "../../components/Banner"
import HowItWorks from "../../components/HowItWorks"
import Services from "../../components/Services/Services"

const Home = () => {
    return(
        <div>
            <Banner />
            <div className="w-12/13 mx-auto space-y-10 mb-10">
            <HowItWorks />
            <Services />
            
            </div>
        </div>
    )
}

export default Home