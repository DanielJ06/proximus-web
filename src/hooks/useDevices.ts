import { useContext } from "react";
import { DeviceContext } from "../contexts/DeviceContext";

export function useDevices() {
	const context = useContext(DeviceContext);

	if (!context) {
		throw new Error("useDevices must be inside an DeviceProvider");
	}

	return context;
}
