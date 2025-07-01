import profastLogo from '../assets/logo.png'
const ProfastLogo = () => {
    return (
        <div className="flex items-center">
            <img className="w-[40px] rounded-full" src={profastLogo} alt="" />
            <h2 className="text-xl font-bold -ml-2">ProFast</h2>
        </div>
    )
}

export default ProfastLogo;