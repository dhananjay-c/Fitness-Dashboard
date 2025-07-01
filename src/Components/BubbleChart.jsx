import React from 'react';

const BubbleChart = (data) => {
    return (
        <div className="relative w-[400px] h-[300px] flex items-center justify-center mx-auto">

            {/* Yellow Bubble */}
            <div className="absolute w-[250px] h-[250px] bg-[#f0ca3e] rounded-full opacity-80 shadow-[0_0_60px_20px_rgba(250,204,21,0.5)] top-10 left-32 flex items-center justify-center">
                <div className="text-center text-black font-semibold">
                    <p className='font-bold'>{data.kclintake}</p>
                    <p className="text-sm">kcal</p>
                </div>
            </div>

            {/* Red Bubble */}
            <div className="absolute w-[150px] h-[150px] bg-[#eb5849] rounded-full opacity-70 shadow-[0_0_40px_20px_rgba(252,165,165,0.5)] top-38 left-10 flex items-center justify-center">
                <div className="text-center text-black font-semibold">
                    <p className='font-bold'>{data.kclburned}</p>
                    <p className="text-sm">kcal</p>
                </div>
            </div>

            {/* Black Bubble */}
            <div className="absolute w-[80px] h-[80px] bg-[#3B3A37] text-white rounded-full flex items-center justify-center top-15 left-10">
                <div className="text-center text-white text-sm">
                    <p className='font-bold'>{data.time}</p>
                    <p className="text-xs">hours</p>
                </div>
            </div>

        </div>
    );
};

export default BubbleChart;
