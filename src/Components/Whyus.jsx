import React from "react";

const Whyus = () => {
	return (
		<div className=" bg-gradient-to-r from-sky-600 to-sky-900 text-white py-10">
			<div className="md:container mx-auto">
				{/* <h1 className="text-2xl font-light mb-2  text-[#584c3b] text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> */}
				<h1 className="text-2xl font-light mb-2  text-white ">
					Why Choose US?
				</h1>
				<div className="grid grid-cols-2">
					<h1 className="text-4xl font-bold col-span-1">
						We designed with your lifestyle in mind
					</h1>
					<h1 className="text-justify">
						We always analyze what you need and what your lifestyle is like. of
						all that later we will find an idea to make a house that suits what
						the client expects and what they dream of We always analyze what you
						need and what your lifestyle is like.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Whyus;
