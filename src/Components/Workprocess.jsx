import React from "react";
import dots from "../assets/dots.png";
const Workprocess = () => {
	let work = [
		{
			id: 1,
			title: "Concept",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Recusandae architecto minima ipsum",
			color: "#d9f99d",
		},
		{
			id: 2,
			title: "Design",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Recusandae architecto minima ipsum",
			color: "#a5f3fc",
		},
		{
			id: 3,
			title: "Launch",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Recusandae architecto minima ipsum",
			color: "#a7f3d0",
		},
	];
	return (
		<div>
			<div className="md:container max-sm:px-4 mx-auto md:my-14 my-6  relative">
				<img
					src={dots}
					className="absolute right-2 max-sm:h-[20%] md:top-[-30px] bottom-[-30px] z-[-100]"
					alt=""
				/>
				<div className="grid md:grid-cols-2 ">
					<div>
						<h1 className="text-2xl font-light mb-2  ">Our Process</h1>
						<h1 className="md:text-5xl text-3xl font-bold leading-tight mb-10 text-[#584c3b] text-transparent  bg-clip-text bg-gradient-to-r from-sky-600 to-sky-900">
							Our work process make your dream true
						</h1>

						{work.map((val) => (
							<div
								key={val.id}
								style={{ background: val.color }}
								className="grid grid-cols-12 py-5 pr-5 my-6 hover:shadow-md duration-300 ease-in-out rounded-xl md:w-[90%]"
							>
								<div className="col-span-2 flex justify-center items-center  ">
									<h1 className="text-3xl font-bold">0{val.id}</h1>
								</div>
								<div className="col-span-10">
									<h1 className="md:text-3xl font-bold mb-2 ">{val.title}</h1>
									<p className="max-sm:text-[13px]">{val.desc}</p>
								</div>
							</div>
						))}
					</div>
					<div className="col-span-1 md:p-5">
						<div
							className="bg-zinc-700 h-[15rem] md:h-[40rem] col-span-10   bg-center lg:col-span-7 bg-cover rounded-xl"
							style={{
								backgroundImage: `url(https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=996&t=st=1680377823~exp=1680378423~hmac=74252f9d5bd3b3577e4fc9fbf924ef9d5a95434254ee5fedbf05eac4bcb347e9)`,
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Workprocess;
