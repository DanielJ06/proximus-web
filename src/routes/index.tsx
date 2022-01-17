import React from "react";
import {
	Route,
	Routes as RouterContainer,
	BrowserRouter,
} from "react-router-dom";
import DeviceDetails from "../pages/DeviceDetails";
import Home from "../pages/Home";
import ImportFile from "../pages/ImportFile";

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<RouterContainer>
				<Route path="/" element={<Home />} />
				<Route path="/import" element={<ImportFile />} />
				<Route path="/details" element={<DeviceDetails />} />
			</RouterContainer>
		</BrowserRouter>
	);
};

export default Routes;
