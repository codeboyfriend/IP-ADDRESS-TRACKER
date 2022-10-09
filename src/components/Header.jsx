import arrow from '../assets/images/icon-arrow.svg';
import BG from '../assets/images/pattern-bg.png';

const Header = ({
  ipAddress,
  setIpAddress,
  fetchData
}) => {
  return (
    <div>
        {/* Image Background */}
        <div>
          <img src={BG} className='h-[250px] w-[100vw] -z-10 absolute object-cover' alt="" />
        </div>

        {/* Form */}
        <form onSubmit={(e) => {
          e.preventDefault();
          fetchData();
          setIpAddress('');
        }} className='relative py-6'>
            <h2 className='text-center text-white text-3xl mb-6'>IP Address Tracker</h2>
            <div action="" className='flex justify-center max-w-[400px] mx-auto'>
                <input 
                  type="text" 
                  className='py-2 px-4 w-full outline-none rounded-l-lg' 
                  placeholder="Search for any IP address or domain" 
                  value={ipAddress}
                  onChange={e => setIpAddress(e.target.value)}
                />
                <button type='onSubmit'
                  className='bg-black p-3 border-0 hover:opacity-60 rounded-r-lg'
                ><img src={arrow} alt="" />
                </button>
            </div>
        </form>
    </div>
  )
}

export default Header