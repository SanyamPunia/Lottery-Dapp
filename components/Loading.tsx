import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091b18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img className="rounded-full h-20 w-20" src="./vercel.svg" alt="" />
        <h1 className="text-lg text-white font-bold">
          Loading the LOTTERY DAPP
        </h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
