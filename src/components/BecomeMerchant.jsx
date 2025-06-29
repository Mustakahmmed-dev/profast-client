
import merchantBg from '../assets/be-a-merchant-bg.png'
import merchantLocation from '../assets/location-merchant.png'

const BecomeMerchant = () => {
    return(
        <div className="p-10 mx-10 rounded-lg border bg-[#03373D] bg-cover bg-center flex items-center " style={{backgroundImage: `url(${merchantBg})`}}>
            {/* <img src={merchantBg} alt="" /> */}
            {/* <img src={merchantLocation} alt="" /> */}
            <div className='space-y-4 text-white'>
                <h2 className='text-2xl font-bold'>Merchant and Customer Satisfaction is Our First Priority</h2>
                <p className='text-gray-300'>Lorem ipsum, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nam. dolor sit amet consectetur adipisicing elit. Omnis beatae vitae, cupiditate quidem architecto facilis.</p>
                <div>
                    <button className='btn rounded-full font-bold transition-all bg-[#CAEB66] mr-4'>Become a Merchant</button>
                    <button className='btn btn-ghost rounded-full font-bold transition-all text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black outline'>Earn with ProFast Courier</button>
                </div>
            </div>
            <div>
                <img src={merchantLocation} alt="Location of the merchant" />
            </div>
        </div>
    )
}

export default BecomeMerchant;