import React from "react";
import logo from "../assets/wa_logo.png";
const Footer = () => {
	return (
		<div style={{ background: "#050e20", color: "white" }}>
			<div className="container mx-auto">
				<img src={logo} alt="" />
			</div>
		</div>
	);
};

export default Footer;
