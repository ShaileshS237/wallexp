import React from "react";
const Contact = () => {
	return (
		<div className="bg-gray-900 text-white py-10">
			<div className="md:container mx-auto">
				<h1 className="text-4xl font-bold mb-5">
					Let's <span className="special text-6xl font-light">level up </span>
					your home, together.
				</h1>
				<form action="">
					<div className="grid grid-cols-3 gap-5">
						<input
							className="p-5"
							type="text"
							placeholder="Name"
							name=""
							id=""
						/>
						<input
							className="p-5"
							type="text"
							placeholder="Mobile Number"
							name=""
							id=""
						/>
						<input
							className="p-5"
							type="text"
							placeholder="Email Address"
							name=""
							id=""
						/>
					</div>

					<textarea
						className="p-5 w-full mt-5"
						type="text"
						placeholder="Your Message"
						name=""
						id=""
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;
