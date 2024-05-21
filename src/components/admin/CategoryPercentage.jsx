import React from 'react';

const CategoryPercentage = ({ value, heading }) => {
  return (
    <div className="my-4 p-4 border rounded shadow">
      <h5 className="text-lg font-semibold mb-2">{heading}</h5>
      <div className="relative w-full h-6 bg-gray-200 rounded overflow-hidden">
        <div
          className={`h-full ${value > 50 ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium">{value}%</span>
    </div>
  );
};

export default CategoryPercentage;
