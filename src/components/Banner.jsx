
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../assets/banner/banner1.png';
import bannerImg2 from '../assets/banner/banner2.png';
import bannerImg3 from '../assets/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={bannerImg1} alt="Banner1" />
                <p className='legend'>Legend 1</p>
            </div>
            <div>
                <img src={bannerImg2} alt="Banner2" />
                <p className='legend'>Legend 1</p>
            </div>
            <div>
                <img src={bannerImg3} alt="Banner3" />
                <p className='legend'>Legend 1</p>
            </div>
        </Carousel>
    )
}

export default Banner;