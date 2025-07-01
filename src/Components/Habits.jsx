import React from 'react'
import { FiPlus } from "react-icons/fi";
import HabitCard from './HabitCard';

const Habits = () => {
    return (
        <>

            <div className='bg-[#ffffff] w-285 p-5 justify-between rounded-4xl'>


                <div className='w-full flex justify-between mb-7'>
                    <div><h1 className='text-xl font-medium'>My Habits</h1></div>
                    <div className='flex items-center'>
                        <h1 className='text-md mr-3'>Add New</h1>
                        <div className='w-9 h-9 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer bg-[#262930] transition duration-300 text-amber-300' ><FiPlus size={20} /></div>
                    </div>
                </div>

                <div>
                    <HabitCard totalSession={12} completedSession={8} session="Streaching" trainer="Alice McCain"></HabitCard>
                    <HabitCard totalSession={10} completedSession={6} session="Yoga Training" trainer="Jennifer Lubin"></HabitCard>
                    <HabitCard totalSession={8} completedSession={4} session="Massage" trainer="Jphnson Cooper"></HabitCard>
                    <HabitCard totalSession={10} completedSession={8} session="Ab Exercise" trainer="Alice McCain"></HabitCard>
                </div>

            </div>
        </>
    )
}

export default Habits