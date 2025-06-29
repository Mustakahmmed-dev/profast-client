import liveTracking from '../assets/live-tracking.png'
import safeDelivery from '../assets/safe-delivery.png'
// import callCenter from '../assets/customer-top.png'
const Benefits = () => {
    return(
        <div className="md:mx-10 grid grid-cols-1 gap-5">
            <div className="bg-white p-8 rounded-lg flex items-center gap-3">
                <img className='w-[100px]' src={liveTracking} alt="" />
                <div className='border-l p-5 border-gray-300 border-dashed'>
                    <h2 className='text-xl font-bold text-slate-800'>Live Parcel Tracking</h2>
                    <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus numquam perspiciatis error vitae dolore, explicabo cumque dolorem? Assumenda, animi voluptas! </p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center gap-3">
                <img className='w-[100px]' src={safeDelivery} alt="" />
                <div className='border-l p-5 border-gray-300 border-dashed'>
                    <h2 className='text-xl font-bold text-slate-800'>100% Safe Deliver</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere dolores voluptas aut at! Ullam cupiditate totam aspernatur culpa nemo?</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg flex items-center gap-3">
                <img className='w-[100px]' src={safeDelivery} alt="" />
                <div className='border-l p-5 border-gray-300 border-dashed'>
                    <h2 className='text-xl font-bold text-slate-800'>24/7 Call Center Support</h2>
                    <p className='text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, minus corporis illum pariatur eveniet sapiente obcaecati iure architecto sunt eos?</p>
                </div>
            </div>
            
        </div>
    )
}

export default Benefits;