import React from 'react'
import WeightProgressBar from './WeightProgressBar'

function WeightLossCard() {
    return (
        <>
            <>
                <div className='bg-[#ffffff] w-130 p-5 justify-between rounded-4xl'>


                    <div className='w-full flex justify-between'>
                        <div><h1 className='text-xl font-medium'>Weight Loss Plan</h1></div>
                        <div>
                            <h1 className='text-xl font-medium'>68%</h1>
                            <h1 className='text-sm'>Completed</h1>
                        </div>
                    </div>


                    <div className='mt-10 flex justify-around'>
                        <WeightProgressBar min={50} max={58} value={55.2} />
                    </div>

                </div>
            </>
        </>
    )
}

export default WeightLossCard