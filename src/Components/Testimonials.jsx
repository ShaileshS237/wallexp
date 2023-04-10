import React from "react";
import Marquee from "react-fast-marquee";
import people from "../assets/people.png";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
	{
		id: 1,
		name: "Digvijay Kumar",

		city: "Kurukshtra",
		review:
			" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsum deserunt. Nulla ex iure quidem eos iste voluptates veritatis deserunt eveniet voluptatum dignissimos tempore, reiciendis consectetur, recusandae perferendis nisi, ratione sapiente suscipit?",
	},
	{
		id: 2,
		name: "Shailesh Sawale",
		city: "Kurukshtra",
		review:
			" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsum deserunt. Nulla ex iure quidem eos iste voluptates veritatis deserunt eveniet voluptatum dignissimos tempore, reiciendis consectetur, recusandae perferendis nisi, ratione sapiente suscipit?",
	},
];

export const Testimonials = () => {
	return (
		<div className="py-[50px]">
			<div>
				<h1 className="text-4xl font-bold text-center leading-tight  mb-4">
					What Our Client Say's
				</h1>
				<img
					src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-Transparent.png"
					alt=""
					className="center2"
					width={60}
				/>
				<div className="md:container mx-auto">
					<Marquee speed={40}>
						<div>
							<img className="center2 my-4" src={people} alt="" />
						</div>
						<div className="px-20">
							<img className="center2 my-4" src={people} alt="" />
						</div>
					</Marquee>

					<Swiper spaceBetween={0} slidesPerView={1} className="mt-8">
						{testimonials.map((test) => {
							return (
								<SwiperSlide key={test.id}>
									<div>
										<div className="  text-center text-black inset-x-0 bottom-10">
											<p className="mt-5 text-xl md:px-[20%]  font-thin">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Eveniet, ipsum deserunt. Nulla ex iure quidem eos iste
												voluptates veritatis deserunt eveniet voluptatum
												dignissimos tempore, reiciendis consectetur, recusandae
												perferendis nisi, ratione sapiente suscipit?
											</p>
											<h1 className="text-xl font-bold mt-5">...</h1>
											<h1 className="text-xl font-bold mt-5">
												Mr. {test.name}
											</h1>
											<h1 className="text-xl font-thin mt-1">{test.city}</h1>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
