import React from "react";
import Loader from "../assets/Q0t0.gif"
const Hero = () => {
  return (
    <div>
     <section className="bg-white ">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">মের্সাস 
				<span className="dark:text-green-400"> হাজী নওশা মিয়া</span> এন্ড সন্স
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Something new is loading..
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" to="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-400 dark:text-gray-900"> হোম </a>
				<a rel="noopener noreferrer" to="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">বিস্তারিত..</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={Loader} alt="..." className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </div>
  );
};

export default Hero;