import { useEffect } from "react";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Homepage />
		</div>
	);
}

export default App;
