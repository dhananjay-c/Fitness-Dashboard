import React from 'react'
import logo from '../assets/logo.png'
import { GoHome } from "react-icons/go";
import { PiSpeedometerLight } from "react-icons/pi";
import { PiFlagLight } from "react-icons/pi";
import { PiCalendarBlankLight } from "react-icons/pi";
import { PiBellLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import profile from '../assets/profile.jpg'




const Nav = () => {
    return (
        <>
            <div className='w-20 p-2 flex items-center justify-around flex-wrap'>
                <div className='flex items-center justify-around  w-full'>
                    <img src={logo} alt="" className='w-13 cursor-pointer' />
                </div>

                <div className='w-16 rounded-full mt-15 bg-[#ffff] gap-0 p-1 flex justify-around flex-wrap'>

                    <div className='bg-[#262930] w-14 h-14 rounded-full flex justify-around items-center p-2 cursor-pointer'>
                        <GoHome size={30} className='text-amber-300 transition duration-200' />
                    </div>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <PiSpeedometerLight size={30} className='' />
                    </div>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <PiFlagLight size={30} className='' />
                    </div>

                    <div className='w-13 h-13 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <PiCalendarBlankLight size={30} className='' />
                    </div>

                </div>

                <div className='w-16 rounded-full mt-4 bg-[#ffff] gap-0 p-1 flex justify-around flex-wrap'>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center p-2 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <PiBellLight size={30} className='' />
                    </div>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <IoSettingsOutline size={30} className='' />
                    </div>

                </div>


                <div className='w-16 rounded-full mt-60 bg-[#ffff] gap-0 p-1 flex justify-around flex-wrap'>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center p-2 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <IoLogOutOutline size={30} className='' />
                    </div>

                    <div className='w-14 h-14 rounded-full flex justify-around items-center mt-1 cursor-pointer hover:bg-[#262930] transition duration-300 hover:text-amber-300'>
                        <img src={profile} alt="" className='rounded-full' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Nav