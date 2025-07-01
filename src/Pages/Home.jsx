import React from 'react'
import BubbleChart from '../Components/BubbleChart'
import { MdWindow } from "react-icons/md";
import TrainingCalendar from '../Components/TrainingCalendar';
import StepsCard from '../Components/StepsCard';
import WeightLossCard from '../Components/WeightLossCard';
import Habits from '../Components/Habits';

const Home = () => {
    return (
        <>
            <div className='p-1 overflow-y-auto'>



                <div className='flex'>
                    <div className='bg-[#d1c7b6] w-230 rounded-4xl p-9 mt-4 '>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-3xl font-medium'>Your Workout</h1>
                                <h1 className='text-3xl font-medium mt-[-2px]'>Results for Today</h1>
                            </div>
                            <MdWindow className='w-9 h-9 rounded-full flex justify-around items-center p-2 mt-1 cursor-pointer bg-[#262930] text-amber-300' />
                        </div>

                        <div className='flex justify-between items-baseline'>
                            <div className=''>
                                <div className='flex items-center'>
                                    <div className='w-12 h-3 bg-[#f0ca3e] rounded-full'></div>
                                    <h1 className='ml-3 text-sm font-medium'>Calorie Intake</h1>
                                </div>
                                <div className='flex items-center mt-1'>
                                    <div className='w-12 h-3 bg-[#eb5849] rounded-full'></div>
                                    <h1 className='ml-3 text-sm font-medium'>Calorie Burned</h1>
                                </div>
                                <div className='flex items-center mt-1'>
                                    <div className='w-12 h-3 bg-[#3B3A37] rounded-full'></div>
                                    <h1 className='ml-3 text-sm font-medium'>Active Time</h1>
                                </div>
                            </div>
                            <div className='mr-10'><BubbleChart kclintake="1,875" kclburned="850" time='2.30'></BubbleChart></div>
                        </div>
                    </div>


                    <div className='mt-4 ml-8'>
                        <TrainingCalendar></TrainingCalendar>
                    </div>
                </div>


                <div className='mt-7 flex'>

                    <div>
                        <div>
                            <StepsCard></StepsCard>
                        </div>
                        <div className='mt-7'>
                            <WeightLossCard></WeightLossCard>
                        </div>
                    </div>


                    <div className='ml-8'>
                        <Habits></Habits>
                    </div>

                </div>



            </div>



        </>
    )
}

export default Home