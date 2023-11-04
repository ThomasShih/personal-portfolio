import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<React.Fragment>
						{
							INFO.workExperience.map(({ image, company, subtitle, duration }) => (
								<div className="work">
									<img
										src={image}
										alt={company}
										className="work-image"
									/>
									<div>
										<div className="work-title">{company}</div>
										<div className="work-subtitle">{subtitle}</div>
										<div className="work-duration">{duration}</div>
									</div>
								</div>
							))
						}
					</React.Fragment>
				}
			/>
		</div>
	);
};

export default Works;
