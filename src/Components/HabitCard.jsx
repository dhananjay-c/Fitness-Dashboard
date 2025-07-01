import React from 'react'
import user from '../assets/user.png'
import { BsThreeDots } from "react-icons/bs";

const HabitCard = (data) => {






    return (
        <>
            <div className='bg-[#f6f3ee] rounded-2xl p-3 flex items-center justify-between mt-2'>

                <div className='flex'>
                    <div>
                        <img src={user} alt="" className='w-12' />
                    </div>

                    <div className='ml-3'>
                        <h1 className='font-medium text-lg'>{data.session}</h1>
                        <h1 className='text-sm'>Trainer: {data.trainer}</h1>
                    </div>
                </div>

                <div className='flex items-center justify-start'>
                    <div className="flex items-center">
                        <h1 className='text-sm mr-3'>Sessions Completed: {data.completedSession}/{data.totalSession}</h1>
                        {
                            Array.from({ length: data.completedSession }).map((_, index) => (

                                <div key={index} className='w-3 h-7 bg-[#dc745e] rounded-full mr-1'></div>
                            ))
                        }

                        {
                            Array.from({ length: data.totalSession - data.completedSession }).map((_, index) => (

                                <div key={index} className='w-3 h-7 bg-[#d2cec9] rounded-full mr-1'></div>
                            ))
                        }
                    </div>
                    <BsThreeDots className='ml-4 mr-4 cursor-pointer' />





                </div>


            </div>
        </>
    )
}

export default HabitCard