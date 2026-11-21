import React from 'react'
// import { currentWeather, weeklyForecast } from '../../lib/mockData'
import TodayCard from './TodayCard'
import WeeklyForecast from './WeeklyForecast'

const SevenDaysWeather = ({weather,forecast}) => {
  return (
    <div className='flex gap-10 mt-4'>
      <TodayCard weather={weather} />
      <WeeklyForecast forecast={forecast} />
    </div>
  )
}

export default SevenDaysWeather
