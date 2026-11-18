import React from 'react'
import { currentWeather, weeklyForecast } from '../../lib/mockData'
import TodayCard from './TodayCard'
import WeeklyForecast from './WeeklyForecast'

const SevenDaysWeather = () => {
  return (
    <div className='flex gap-10 mt-4'>
      <TodayCard weather={currentWeather} />
      <WeeklyForecast weather={weeklyForecast} />
    </div>
  )
}

export default SevenDaysWeather
