/* eslint-disable array-callback-return */
import { createContext, useState } from "react";
import { Device } from "../utils/models/device";

interface DeviceContextData {
	devices: Device[];
	deleteDevice: (id: string) => void;
	updateDevice: (device: Device) => void;
	registerDevice: (device: Device) => void;
	registerMultipleDevices: (devices: Device[]) => void;
}

export const DeviceContext = createContext<DeviceContextData>(
	{} as DeviceContextData
);

export const DeviceProvider: React.FC = ({ children }) => {
	const [devices, setDevices] = useState<Device[]>([
		{ id: "1", model: "Iphone 11", os: "IOS", notes: "asdasd" },
		{ id: "2", model: "Iphone 12", os: "IOS", notes: "asdasd" },
		{ id: "3", model: "Iphone 13", os: "IOS", notes: "asdasd" },
	]);

	function deleteDevice(id: string) {
		const findDevice = devices.findIndex((d) => d.id === id);
		if (devices[findDevice]) {
			devices.splice(findDevice, 1);
			setDevices([...devices]);
		}
	}

	function updateDevice(device: Device) {
		const deviceIndex = devices.findIndex((d) => d.id === device.id);
		if (devices[deviceIndex]) {
			devices[deviceIndex] = device;
			setDevices([...devices]);
		}
	}

	function registerDevice(device: Device) {
		const findDevice = devices.findIndex((d) => d.id === device.id);
		if (!devices[findDevice]) {
			devices.push(device);
		}
	}

	function registerMultipleDevices(deviceLists: Device[]) {
		deviceLists.map((device: Device) => {
			console.log(`called: ${device.model}`);
			const findDevice = devices.findIndex((d) => d.id === device.id);
			if (!devices[findDevice]) {
				console.log(`registered: ${device.model}`);
				devices.push(device);
			}
		});
	}

	return (
		<DeviceContext.Provider
			value={{
				devices: devices,
				deleteDevice,
				registerDevice,
				registerMultipleDevices,
				updateDevice,
			}}
		>
			{children}
		</DeviceContext.Provider>
	);
};
