import React from "react";

const LoadingSpinner = ({ label = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="spinner w-12 h-12 border-4 border-t-purple-500 border-opacity-50 rounded-full animate-spin"></div>
      <p className="mt-4 text-sm font-medium text-secondary">{label}</p>
    </div>
  );
};

export default LoadingSpinner;
