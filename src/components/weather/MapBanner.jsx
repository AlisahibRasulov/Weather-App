import React from 'react'
import MapImg from '../../images/Images.png'
const MapBanner = () => {
  return (
    <div className="w-full h-[530px] rounded-lg overflow-hidden relative">
        <p className="text-center bg-[#D9D9D94D] blur-[25%] text-[#060609] text-[24px] font-semibold mb-4 rounded-[15px] absolute top-10 left-3 right-3">Explore global map of wind 
weather and ocean condition </p>
      <img src={MapImg} alt="Map" className="w-full h-full object-cover" />
      <button className="w-[260px] py-5 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#D9D9D9] text-[#0F0F11] text-[24px] font-semibold py-2 px-4 rounded-[15px] hover:bg-[#CCCCCC] hover:text-[#0F0F11] transition duration-300">
        GET STARTED
      </button>
    </div>
  )
}

export default MapBanner
