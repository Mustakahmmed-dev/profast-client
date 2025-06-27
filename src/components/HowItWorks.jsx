import { FaBoxOpen, FaMoneyCheckAlt, FaStoreAlt, FaBuilding } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className="max-w-10/12 mx-auto my-18">
            <h1 className="text-3xl font-bold text-gray-700 ml-10 mb-4">How It Works</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-4">
                        <FaBoxOpen className="text-4xl text-primary" />
                        <h3 className="text-lg font-semibold">Booking Pick & Drop</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Customers can easily book parcel pick-up through our app or website.
                        Our agents will collect the parcel from your doorstep and deliver it
                        to the destination.
                    </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-4">
                        <FaMoneyCheckAlt className="text-4xl text-primary" />
                        <h3 className="text-lg font-semibold">Cash on Delivery</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        We collect cash on delivery from your customers and ensure secure and
                        timely remittance back to your account.
                    </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-4">
                        <FaStoreAlt className="text-4xl text-primary" />
                        <h3 className="text-lg font-semibold">Delivery Hub</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Parcels are processed through our optimized delivery hubs ensuring
                        fast, efficient sorting and timely dispatch to the destination.
                    </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-4">
                        <FaBuilding className="text-4xl text-primary" />
                        <h3 className="text-lg font-semibold">Booking SME & Corporate</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Our solutions are tailored for businesses of all sizes. We provide
                        dedicated support for SMEs and corporate clients for regular
                        deliveries.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default HowItWorks;