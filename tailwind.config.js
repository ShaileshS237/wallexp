/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			padding: "6rem",
		},
		container2: {
			padding: "4rem",
		},
		extend: {
			backgroundImage: {
				"hero-pattern":
					"linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../src/images/icon-bg.jpg')",
			},
		},
	},
	plugins: [],
};
