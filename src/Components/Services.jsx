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
		<div className="md:container md:mx-auto">
			<div className=" my-14">
				<div className="col-span-3 ">
					<h1 className="text-2xl font-light mb-2  text-[#584c3b] text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Service We Offer
					</h1>
					<h1 className="text-5xl font-bold leading-tight ">
						Transform Your Space: Discover Our Services Today!
					</h1>
				</div>
				<div className="grid md:grid-cols-5 gap-5 my-5">
					{services.map((services) => (
						<div className="border-2 p-5 hover:bg-slate-200 hover:text-slate-900 duration-150 ease-in-out cursor-default rounded-xl">
							<img src={services.icon} alt="" className="h-14 " />
							<h1 className="mt-3 text-2xl  font-bold ">{services.name}</h1>
							<h1 className="mt-1 text-1xl font-light">{services.desc}</h1>
						</div>
					))}
				</div>
				{/* <div>
					<h1 className="text-2xl mb-2 font-bold">Interior Design</h1>
					<p>
						Our interior design services are here to help. Whether you're
						looking to revamp a single room or redesign your entire space
					</p>
				</div> */}
			</div>

			{/* <div className="grid grid-cols-5 gap-4">
				<div className="  p-3  w-auto">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2984/2984892.png"
						alt=""
						className="h-14 "
					/>
					<h1 className="text-xl">Interior Design</h1>
					<div>View More</div>
				</div>
			</div> */}

			{/* <Swiper
				className="my-10"
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
                    
                </SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper> */}
		</div>
	);
};

export default Services;
