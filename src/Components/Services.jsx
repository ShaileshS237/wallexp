import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
	{
		id: 1,
		name: "Interior",
		desc: "Interior design service creates personalized and functional spaces based on the client's needs and aesthetic preferences.",
		icon: "https://cdn-icons-png.flaticon.com/512/2984/2984892.png",
	},
	{
		id: 2,
		name: "Exterior",
		desc: "Interior design service creates personalized and functional spaces based on the client's needs and aesthetic preferences.",
		icon: "https://cdn-icons-png.flaticon.com/512/2942/2942711.png",
	},
	{
		id: 3,
		name: "Textures",
		desc: "Interior design service creates personalized and functional spaces based on the client's needs and aesthetic preferences.",
		icon: "https://cdn-icons-png.flaticon.com/512/698/698633.png",
	},
	{
		id: 4,
		name: "Damp Proofing",
		desc: "Interior design service creates personalized and functional spaces based on the client's needs and aesthetic preferences.",
		icon: "https://cdn-icons-png.flaticon.com/512/4174/4174881.png",
	},
	{
		id: 5,
		name: "Santization",
		desc: "Interior design service creates personalized and functional spaces based on the client's needs and aesthetic preferences.",
		icon: "https://cdn-icons-png.flaticon.com/512/10178/10178961.png",
	},
];

const Services = () => {
	return (
		<div className="md:container  md:mx-auto max-sm:px-4">
			<div className=" my-5 md:my-14">
				<div className="col-span-3 ">
					<h1 className="text-2xl font-light mb-2  ">Service We Offer</h1>
					<h1 className="md:text-5xl text-3xl font-bold leading-tight text-[#584c3b] text-transparent  bg-clip-text bg-gradient-to-l from-sky-600 to-sky-900">
						Transform Your Space: Discover Our Services Today!
					</h1>
				</div>
				<div className="grid md:grid-cols-5 gap-5 my-5">
					{services.map((services) => (
						<div className="border-2 border-sky-100 p-5 hover:bg-sky-50 hover:text-sky-900 duration-150 ease-in-out cursor-default rounded-xl">
							<img src={services.icon} alt="" className="h-14 " />
							<h1 className="mt-3 md:text-2xl  font-bold ">{services.name}</h1>
							<h1 className="mt-1 text-sm md:text-[15px] font-light">
								{services.desc}
							</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
