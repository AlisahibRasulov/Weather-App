import React from 'react'
import { useState } from "react";
import { MoonIcon, SunIcon } from '../../svg'

const ThemeToggle = () => {
  return (

 <div className="relative w-[92px] rounded-full border border-[#626161] bg-[#19191B] flex items-center justify-end cursor-pointer">
 
  {/* <div className="w-9 h-9 rounded-full bg-[#] flex items-center justify-center text-[#19191B]">
    <SunIcon className="w-5 h-5" />
  </div> */}

  <div className="w-9 h-9 rounded-full bg-[#D8E9F9] flex items-center justify-center text-[#19191B]">
    <MoonIcon />
  </div>
</div>
  )
}

export default ThemeToggle
