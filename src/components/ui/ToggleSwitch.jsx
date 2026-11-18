import React from 'react'

const ToggleSwitch = () => {
  return (
<button className="w-[163px] flex items-center rounded-full p-1 bg-[#1E1E1E]">
  <div className="w-1/2 text-[11px] text-center bg-[#BBD7EC] text-[#1E1E1E] py-2 rounded-full">
    Forecast
  </div>

  <div className="w-1/2 text-[11px] text-center text-white/60 py-2 rounded-full">
    Air Quality
  </div>
</button>
  )
}

export default ToggleSwitch
