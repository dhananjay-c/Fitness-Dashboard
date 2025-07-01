import React from "react";

const WeightProgressBar = ({ min = 50, max = 58, value = 55.2 }) => {
    const percent = ((value - min) / (max - min)) * 100;

    return (
        <div className="w-[100%]">
            <div className="relative h-6">
                {/* Progress Bar Background */}
                <div className="w-[100%] h-3 rounded-full bg-gray-200 overflow-hidden">
                    {/* Progress Filled */}
                    <div
                        className="h-3 bg-gray-800 rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                    />
                </div>

                {/* Tooltip with current value */}
                <div
                    className="absolute -top-8 left-0 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full"
                    style={{ left: `${percent}%` }}
                >
                    {value.toFixed(1)} kg
                </div>
            </div>

            {/* Labels below bar */}
            <div className="flex justify-between text-sm text-gray-600">
                <span className="font-bold">{min} kg</span>
                <span className="font-bold">{max} kg</span>
            </div>
        </div>
    );
};

export default WeightProgressBar;
