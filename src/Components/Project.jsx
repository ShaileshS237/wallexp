import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Project = () => {
	let typeTemp = [
		{
			id: 1,
			name: "Interior",
			isActive: 1,
			image: [
				{
					id: 1,
					image:
						"https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=1380&t=st=1681116783~exp=1681117383~hmac=198c257f4b85ef22ea1abed573c17d90a9219594fd02253b286ec706bfe1820b",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1380&t=st=1681116792~exp=1681117392~hmac=1594c1b72e880ecc7a6e3123b52b45e79dc02871a9935d810686bda62f6b43fa",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?w=1380&t=st=1681116805~exp=1681117405~hmac=cab23cf667d6c31ef9e325f92a8806897397b3e1687a4c83811143d8027a4757",
				},
			],
		},
		{
			id: 2,
			name: "Exterior",
			isActive: 0,
			image: [
				{
					id: 1,
					image:
						"https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?w=1380&t=st=1681118211~exp=1681118811~hmac=651bfc5cde9a8bbec274de49a74afae895947971d34cf6e5a0cc7fbfdaca57a2",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1380&t=st=1681118222~exp=1681118822~hmac=0243b7a82ac0bbd7e7d04dcd1da5b3e4feba0554802cbb5d71a8254795ecba73",
				},
				{
					id: 3,
					image:
						"https://img.freepik.com/free-photo/cottage-with-green-trees_1149-127.jpg?1&w=900&t=st=1681118235~exp=1681118835~hmac=a613ccbed7b2b1f053bae6f51e40977ac381889d36a6e1ee87a1165b713a8db8",
				},
			],
		},
		{
			id: 3,
			name: "Textures",
			isActive: 0,
			image: [
				{
					id: 1,
					image:
						"https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1380&t=st=1681116792~exp=1681117392~hmac=1594c1b72e880ecc7a6e3123b52b45e79dc02871a9935d810686bda62f6b43fa",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=1380&t=st=1681116783~exp=1681117383~hmac=198c257f4b85ef22ea1abed573c17d90a9219594fd02253b286ec706bfe1820b",
				},
			],
		},
		{
			id: 4,
			name: "Damp Proofing",
			isActive: 0,
			image: [
				{
					id: 1,
					image:
						"https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1380&t=st=1681116792~exp=1681117392~hmac=1594c1b72e880ecc7a6e3123b52b45e79dc02871a9935d810686bda62f6b43fa",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=1380&t=st=1681116783~exp=1681117383~hmac=198c257f4b85ef22ea1abed573c17d90a9219594fd02253b286ec706bfe1820b",
				},
			],
		},
		{
			id: 5,
			name: "Santization",
			isActive: 0,
			image: [
				{
					id: 1,
					image:
						"https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1380&t=st=1681116792~exp=1681117392~hmac=1594c1b72e880ecc7a6e3123b52b45e79dc02871a9935d810686bda62f6b43fa",
				},
				{
					id: 2,
					image:
						"https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=1380&t=st=1681116783~exp=1681117383~hmac=198c257f4b85ef22ea1abed573c17d90a9219594fd02253b286ec706bfe1820b",
				},
			],
		},
	];
	const [type, SetType] = useState(typeTemp);
	const [currentImage, SetCurrentImage] = useState(type[0].image);

	return (
		<div className="md:container max-sm:px-4 mx-auto my-10">
			<h1 className="md:text-4xl text-2xl font-bold text-center leading-tight mb-7">
				Our Portfolio
			</h1>
			<div className="grid md:grid-cols-5 gap-4">
				{type.map((val) => (
					<div
						onClick={() => {
							SetCurrentImage(type[val.id - 1].image);
						}}
						key={val.id}
						className={`text-center hover:bg-sky-500 hover:text-sky-100  rounded-xl border-2 p-5 cursor-pointer ${
							val.isActive ? "bg-slate-100 " : "bg-slate-100"
						}`}
					>
						<h1>{val.name}</h1>
					</div>
				))}
			</div>

			<Swiper
				className="mt-10"
				spaceBetween={50}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					1245: {
						slidesPerView: 3,
					},
				}}
				autoplay={{ delay: 1000 }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => {
					console.log(swiper);
				}}
			>
				{currentImage.map((val) => (
					<SwiperSlide>
						<div className=" h-[15rem] md:h-[30rem] w-full relative rounded-xl">
							<img
								src={val.image}
								className="w-full h-full object-cover
							absolute mix-blend-overlay rounded-xl"
								alt=""
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* 
			<div className="grid grid-cols-2">
				<div>
					<div
						className="bg-zinc-700 h-[15rem] md:h-[40rem] col-span-10   bg-center lg:col-span-7 bg-cover"
						style={{
							backgroundImage: `url(https://img.freepik.com/free-photo/gray-chair-living-room-with-copy-space_43614-876.jpg?w=900&t=st=1680374543~exp=1680375143~hmac=5c8182535dc01e67945786de7be85899e5d1491f3d9947b35ac07855495b0c6d)`,
						}}
					></div>
				</div>
				<div>
					<div
						className="bg-zinc-700 h-[7rem] md:h-[40rem] col-span-10   bg-center lg:col-span-7 bg-cover"
						style={{
							backgroundImage: `url(https://img.freepik.com/free-photo/gray-chair-living-room-with-copy-space_43614-876.jpg?w=900&t=st=1680374543~exp=1680375143~hmac=5c8182535dc01e67945786de7be85899e5d1491f3d9947b35ac07855495b0c6d)`,
						}}
					></div>
					<div
						className="bg-zinc-700 h-[7rem] md:h-[40rem] col-span-10   bg-center lg:col-span-7 bg-cover"
						style={{
							backgroundImage: `url(https://img.freepik.com/free-photo/gray-chair-living-room-with-copy-space_43614-876.jpg?w=900&t=st=1680374543~exp=1680375143~hmac=5c8182535dc01e67945786de7be85899e5d1491f3d9947b35ac07855495b0c6d)`,
						}}
					></div>
				</div>
			</div> */}
		</div>
	);
};

export default Project;
