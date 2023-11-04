import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Logo from "../components/common/logo";
import Works from "../components/homepage/works";
import SocialMediaLinks from "../components/homepage/socialMediaLinks";
import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<Logo />
						<div className="title homepage-title">
							{INFO.homepage.title}
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>
						</div>

						<SocialMediaLinks />

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
