
const ServiceCard = ({ service }) => {
    return (
        <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full hover:bg-[#CAEB66]">
            <div className="text-center mb-4">
                <div className="bg-slate-100 p-4 rounded-full inline-block">
                    {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary"> {service.title} </h3>
            </div>
            <p className="text-sm text-gray-600">
                {service.description}
            </p>
        </div>
    )
}

export default ServiceCard;