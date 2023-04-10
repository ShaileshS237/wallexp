import React from "react";

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
		<div className="md:container mx-auto my-14">
			<div className="grid md:grid-cols-2">
				{/* <img src="../assets/dots.png" alt="" /> */}
				<div>
					<h1 className="text-2xl font-light mb-2  text-[#584c3b] text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Our Process
					</h1>
					<h1 className="text-5xl font-bold leading-tight mb-10">
						Our work process make your dream true
					</h1>

					{work.map((val) => (
						<div
							key={val.id}
							style={{ width: "90%", background: val.color }}
							className="grid grid-cols-12 py-5 pr-5 my-6 hover:shadow-md duration-300 ease-in-out rounded-xl "
						>
							<div className="col-span-2 flex justify-center items-center  ">
								<h1 className="text-3xl font-bold">0{val.id}</h1>
							</div>
							<div className="col-span-10">
								<h1 className="text-3xl font-bold mb-2 ">{val.title}</h1>
								<p>{val.desc}</p>
							</div>
						</div>
					))}
				</div>
				<div className="col-span-1 p-5">
					<div
						className="bg-zinc-700 h-[15rem] md:h-[40rem] col-span-10   bg-center lg:col-span-7 bg-cover rounded-xl"
						style={{
							backgroundImage: `url(https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=996&t=st=1680377823~exp=1680378423~hmac=74252f9d5bd3b3577e4fc9fbf924ef9d5a95434254ee5fedbf05eac4bcb347e9)`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Workprocess;
