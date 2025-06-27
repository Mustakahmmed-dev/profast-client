
const ServiceCard = ({ service }) => {
    return (
        <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between h-full">
            <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-primary"> {service.title} </h3>
            </div>
            <p className="text-sm text-gray-600">
                {service.description}
            </p>
        </div>
    )
}

export default ServiceCard;