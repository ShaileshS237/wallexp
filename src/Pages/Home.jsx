import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo (1).png";
import Hero from "../Components/Hero";

import "swiper/swiper.min.css";
import Services from "../Components/Services";
import Whyus from "../Components/Whyus";
import Workprocess from "../Components/Workprocess";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import { Testimonials } from "../Components/Testimonials";
const Home = () => {
	return (
		<div>
			{/* <Footer /> */}

			<Navbar />
			<Hero />

			<Services />
			<Whyus />
			<Workprocess />
			<Project />
			<Testimonials />
			<Contact />

			{/* <Footer /> */}
		</div>
	);
};

export default Home;
