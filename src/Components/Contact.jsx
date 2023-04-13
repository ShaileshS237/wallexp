import React from "react";
import logo from "../assets/wa_logo.png";
const Contact = () => {
	return (
		<div className="bg-gradient-to-b from-sky-600 to-sky-900 text-white p-10">
			<div className="md:container mx-auto">
				<div>
					<h1 className="text-4xl font-bold mb-5">
						Let's <span className="special text-6xl font-light">level up </span>
						your home, together.
					</h1>
					<div className="grid grid-cols-2 gap-10">
						<div>
							<form action="">
								<div className="grid grid-cols-2 gap-5">
									<input
										className="p-5 col-span-2 w-full"
										type="text"
										placeholder="Name"
										name=""
										id=""
									/>
									<input
										className="p-5 col-span-1"
										type="text"
										placeholder="Mobile Number"
										name=""
										id=""
									/>
									<input
										className="p-5 col-span-1"
										type="text"
										placeholder="Email Address"
										name=""
										id=""
									/>
									<textarea
										className="p-5 w-full col-span-2 "
										type="text"
										placeholder="Your Message"
										name=""
										rows={3}
										id=""
									/>
									<div className="col-span-2 justify-items-stretch">
										<button className="  bg-sky-50 hover:bg-sky-500 text-sky-500 hover:text-sky-50 text-center py-5 w-full">
											Submit
										</button>
									</div>
								</div>
								{/* <div className="grid grid-cols-4 gap-5">
								<button className="bg-teal-700 mt-5">Submit</button>
							</div> */}
							</form>
						</div>
						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13828.43505591761!2d76.8227094!3d29.94755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f422f5244e7%3A0x9c630c311d6349b8!2sNIT%20KURUKSHETRA!5e0!3m2!1sen!2sin!4v1681384504355!5m2!1sen!2sin"
								className="w-full h-[365px]"
								title="map"
								frameBorder="0"
								style={{ border: 0 }}
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
							/>
						</div>
					</div>
				</div>
				<hr class="h-px mt-14 mb-10  bg-sky-200 border-0 " />
				<div className="grid grid-cols-5 gap-5 justify-items-center">
					<div className="col-span-1">
						<img src={logo} alt="" />
					</div>
					<div>
						<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
							<div class="flex flex-col pb-3">
								<dt class="mb-1 text-gray-500 dark:text-gray-400">
									Explore More
								</dt>
								<dd class=" font-semibold">
									<ul
										class="max-w-md space-y-1  underline-offset-8
						"
									>
										<li>Home</li>
										<li>Portfolio</li>
										<li>About us</li>
										<li>Services</li>
									</ul>
								</dd>
							</div>
						</dl>
					</div>
					<div>
						<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
							<div class="flex flex-col pb-3">
								<dt class="mb-1 text-gray-500 dark:text-gray-400">Location</dt>
								<dd class=" font-semibold">
									NIT KURUKSHETRA WRXF+23G, NIT, Thanesar, Haryana 136119
								</dd>
							</div>
						</dl>
					</div>
					<div>
						<dl class="max-w-md text-gray-900 dark:text-white dark:divide-gray-700">
							<div class="flex flex-col pb-3">
								<dt class="mb-1 text-gray-500 dark:text-gray-400">
									Contact us on
								</dt>
								<dd class=" font-semibold">+91-9511209041</dd>
							</div>
							<div class="flex flex-col pb-3">
								<dt class="mb-1 text-gray-500 dark:text-gray-400">
									Write us on
								</dt>
								<dd class=" font-semibold">info@wallexpert.com</dd>
							</div>
						</dl>
					</div>
					<div>
						<dl class="max-w-md text-gray-900 dark:text-white dark:divide-gray-700">
							<div class="flex flex-col pb-3">
								<dt class="mb-1 text-gray-500 dark:text-gray-400">
									Connect us on
								</dt>
								<dd class=" font-semibold">
									<div className="flex gap-3">
										<button
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
											class="mb-2 inline-block rounded px-2.5 py-2.5 text-xs font-medium uppercase leading-normal text-sky-900 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
											style={{ backgroundColor: "white" }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-4 w-4"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
											</svg>
										</button>
										<button
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
											class="mb-2 inline-block rounded px-2.5 py-2.5 text-xs font-medium uppercase leading-normal text-sky-900 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
											style={{ backgroundColor: "white" }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-4 w-4"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
											</svg>
										</button>
										<button
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
											class="mb-2 inline-block rounded px-2.5 py-2.5 text-xs font-medium uppercase leading-normal text-sky-900 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
											style={{ backgroundColor: "white" }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-4 w-4"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
											</svg>
										</button>
									</div>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
