import React from "react";

const CircularProgressBar = ({ goal = 8500, value = 5201 }) => {
  const percentage = Math.min((value / goal) * 100, 100);
  const angle = (percentage / 100) * 360;

  return (
    <div className="relative w-30 h-30 flex items-center justify-center">
      {/* Circular ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#f97316 ${angle}deg, #e5e7eb ${angle}deg)`,
        }}
      ></div>

      {/* Inner white circle */}
      <div className="w-27 h-27 bg-white rounded-full flex flex-col items-center justify-center z-10 text-center">
        <span className="text-sm text-gray-500">Goal</span>
        <span className="text-xl font-bold">{goal.toLocaleString()}</span>
      </div>

      {/* Floating current value */}
      <div className="absolute -top-2 right-0 bg-white rounded-full px-2 py-1 shadow text-xs font-semibold">
        {value.toLocaleString()}
      </div>
    </div>
  );
};

export default CircularProgressBar;
