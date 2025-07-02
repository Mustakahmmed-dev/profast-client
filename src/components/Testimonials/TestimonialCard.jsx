import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ detail }) => {
    const { name, role, text } = detail;
    return (
        <div className="w-[450px] mx-auto rounded-lg bg-slate-100 p-5">
            <FaQuoteRight />
            <p> {text} </p>
            <div className="border my-5 border-dashed border-gray-300"></div>

            <div className="flex gap-2 items-center">
                <div className="p-4 rounded-full bg-blue-300">Photo</div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800"> {name} </h3>
                    <h4 className="text-gray-600"> {role} </h4>
                </div>

            </div>
        </div>
    )
}

export default TestimonialCard;