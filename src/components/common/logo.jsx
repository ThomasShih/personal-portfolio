import React from "react";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = () => {
	const logoStyle = {
		display: "flex",
		position: "relative",
		top: "auto",
		zIndex: 999,
		border: "1px solid white",
		borderRadius: "50%",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
	};

	return (
		<div style={logoStyle}>
			<img src={INFO.main.logo} alt="logo" className="logo" width="100px" />
		</div>
	);
};

export default Logo;
