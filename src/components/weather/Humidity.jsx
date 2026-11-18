import React from 'react'
import HumidityImg from '../../images/humidity.png'
import HumidityIcon from '../../images/humidity2.png'
const Humidity = ({ weather }) => {
  return (
    <div className="w-[290px] h-[245px] flex flex-col justify-between gap-4 rounded-[15px] overflow-hidden bg-[#1B1B1D] text-[#FFFFFF] p-5">
      <h2>Humidity</h2>
      <div className="flex flex-col justify-center items-center">
        <img src={HumidityImg} alt="Humidity Icon" className="w-[125px] h-[125px]" />
    
        <p className="text-[20px] flex items-center justify-between text-[#FFFFFF] font-normal gap-15">
          {weather.main.humidity}%
          <span className="flex items-center w-[150px] font-normal text-[#ffff] text-[12px]">
            <img src={HumidityIcon} alt="Humidity Icon" />
            The dew point is 270 
            right now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Humidity
