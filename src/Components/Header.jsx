import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";



function Header(data) {
    return (
        <>
            <div className='p-2  mt-5 w-[90vw] flex items-center justify-between bg-[#f6f2ed] '>
                <div>
                    <h1 className='text-4xl font-medium'>Hi, {data.user}!</h1>
                    <p className='mt-2'>Let's take a look at your activity today</p>
                </div>
                <div className='flex items-center'>
                    <div className=' bg-[#ffffff] h-12 w-auto rounded-full flex items-center pt-2 pb-2 pr-5 pl-5'>
                        <LuSearch size={25} />
                        <input type="text" placeholder='Search your health data' className='ml-3 focus:outline-none' />
                    </div>
                    <div className='bg-[#23272f] pt-2 pb-2 pr-5 pl-5 ml-5 h-12 w-30 flex items-center rounded-full justify-around cursor-pointer'>
                        <h1 className='text-white'>Upgrade</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header