const Board = ({
    address
}) => {
  return (
    <div className="bg-white text-black flex flex-col mx-8 lg:mx-20 rounded-lg items-center md:items-start space-y-4 md:space-y-0 md:flex-row justify-between p-8 relative md-[-18rem] md:-mb-10 relative" style={{
        zIndex: 1000
    }}>
        <div className="lg:border-r pr-0 lg:pr-12 lg-border-slate-200">
            <p className="uppercase text-[.7rem] md:text-sm font-bold text-center md:text-start text-slate-500 tracking-wider mb-2 md:mb-3">IP ADDRESS</p>
            <h2 className="font-bold text-slate-900 text-lg lg:text-xl">{address.ip}</h2>
        </div>
        <div className="lg:border-r pr-0 lg:pr-12 lg-border-slate-400">
            <p className="uppercase text-[.7rem] md:text-sm font-bold text-center md:text-start text-slate-500 tracking-wider mb-2 md:mb-3">LOCATION</p>
            <h2 className="font-bold text-slate-900 text-lg lg:text-xl">{address.location.city}, {address.location.region}</h2>
        </div>
        <div className="lg:border-r pr-0 lg:pr-12 lg-border-slate-400">
            <p className="uppercase text-[.7rem] md:text-sm font-bold text-center md:text-start text-slate-500 tracking-wider mb-2 md:mb-3">TIME ZONE</p>
            <h2 className="font-bold text-slate-900 text-lg lg:text-xl">UTC{address.location.timezone}</h2>
        </div>
        <div className="">
            <p className="uppercase text-[.7rem] md:text-sm font-bold text-center md:text-start text-slate-500 tracking-wider mb-2 md:mb-3">ISP</p>
            <h2 className="font-bold text-slate-900 text-lg lg:text-xl">{address.isp}</h2>
        </div>
    </div>
  )
}

export default Board