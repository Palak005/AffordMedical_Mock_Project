import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-[#1e293beb] h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        <p className="mt-4 text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
