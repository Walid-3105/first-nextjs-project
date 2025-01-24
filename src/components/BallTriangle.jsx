"use client"; // Ensure this is a client component

import { BallTriangle } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderComponent;
