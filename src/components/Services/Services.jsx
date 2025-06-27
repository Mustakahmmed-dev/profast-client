import { FaTruck, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaHandshake, FaUndo } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: <FaTruck className="text-4xl text-primary" />,
    },
    {
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: <FaGlobeAsia className="text-4xl text-primary" />,
    },
    {
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: <FaWarehouse className="text-4xl text-primary" />,
    },
    {
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
        icon: <FaHandshake className="text-4xl text-primary" />,
    },
    {
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: <FaUndo className="text-4xl text-primary" />,
    },
];

const Services = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#03373D] rounded-xl p-4">
            <h2 className="text-3xl font-bold text-center mb-5 text-white">Our Services</h2>
            <p className='text-white text-center md:mx-14 mb-5'>At ProFast, we are committed to delivering your parcels with speed, reliability, and care. Whether it's same-day delivery within major cities or nationwide logistics solutions, our wide range of services ensures your business runs smoothly and your customers stay happy. From express shipping to fulfillment, corporate logistics, and hassle-free returns — we've got you covered every step of the way.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>
        </section>
    )
}

export default Services;