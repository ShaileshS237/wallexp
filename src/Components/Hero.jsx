import React from "react";
import background from "../assets/background.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const bg =
	"https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?w=1380&t=st=1681109763~exp=1681110363~hmac=4e90b358b91ee63fe4acb8426225aca104b50e235f7b8649c59890a72deb7906";

const bg2 =
	"https://img.freepik.com/free-photo/living-room-with-blue-couch-white-wall-with-painting-it_1340-23237.jpg?w=1380&t=st=1681108771~exp=1681109371~hmac=74aa15b5cc9a03a8089ec91cb0a644c6fd9c4adf4cdbbb44112f3d9015af3666";
const Hero = () => {
	return (
		<div className="">
			<div>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					autoplay={{ delay: 1000 }}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => {
						console.log(swiper);
					}}
				>
					<SwiperSlide>
						<div className="bg-gradient-to-t from-slate-900 h-[15rem] md:h-[40rem] w-full relative ">
							<img
								src={bg}
								className="w-full h-full object-cover
							absolute mix-blend-overlay"
								alt=""
							/>
							<div className="absolute  text-center text-white inset-x-0 bottom-10">
								<h1 className=" text-7xl  font-bold  ">
									Design Home's Interior
									<br />
								</h1>
								<h1 className="text-center  text-white text-7xl font-bold pt-4 ">
									With Perfection
								</h1>
								<p className="mt-5 text-xl">
									Turn you room with panto a lot more minmaEst and rnodern with
									ease and speed
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-gradient-to-t from-slate-900 h-[15rem] md:h-[40rem] w-full relative ">
							<img
								src={bg2}
								className="w-full h-full object-cover
							absolute mix-blend-overlay"
								alt=""
							/>
							<div className="absolute  text-center text-white inset-x-0 bottom-10">
								<h1 className=" text-7xl  font-bold  ">
									Design Home's Interior
									<br />
								</h1>
								<h1 className="text-center  text-white text-7xl font-bold pt-4 ">
									With Perfection
								</h1>
								<p className="mt-5 text-xl">
									Turn you room with panto a lot more minmaEst and rnodern with
									ease and speed
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Hero;
