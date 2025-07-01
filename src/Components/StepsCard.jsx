import React from 'react'
import { MdModeEdit } from "react-icons/md";
import CircularProgressBar from './CircularProgressBar';

function StepsCard() {
    return (
        <>
            <div className='flex bg-[#ffffff] w-130 p-5 justify-between rounded-4xl'>
                <div className=''>
                    <h1 className='text-xl font-medium'>Steps for Today</h1>
                    <h2 className='text-sm'>Keep your body toned</h2>
                    <div className='flex items-center mt-8'>
                        <h2 className='font-medium'>Change Goal</h2>
                        <div className='w-10 h-10 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer bg-[#262930] transition duration-300 text-amber-300 ml-3'><MdModeEdit size={20} /></div>
                    </div>
                </div>
                <div>
                    <CircularProgressBar></CircularProgressBar>
                </div>
            </div>
        </>
    )
}

export default StepsCard