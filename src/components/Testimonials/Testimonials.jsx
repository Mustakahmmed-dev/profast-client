import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
    {
        name: "Awlad Hossin",
        role: "Senior Product Designer",
        text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine...",
    },
    {
        name: "Rasel Ahamed",
        role: "CTO",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Nasir Uddin",
        role: "CEO",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };

    return (
        <div className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">What our customers are saying</h2>
            <p className="text-gray-600 mb-10">
                Enhance posture, mobility, and well-being effortlessly with ProFast.
            </p>

            <div className="max-w-3xl mx-auto">
                <Slider {...settings}>
                    {testimonialsData.map((detail, i) => <TestimonialCard key={i} detail={detail}></TestimonialCard>)}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials;