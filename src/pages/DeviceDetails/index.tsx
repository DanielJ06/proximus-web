import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { v4 as UUID } from "uuid";
import { FiPaperclip, FiServer, FiSmartphone, FiUser } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";

import Draw from "../../assets/addInfo.svg";
import FilledButton from "../../components/FilledButton";
import Layout from "../../components/Layout";
import { Device } from "../../utils/models/device";
import * as S from "./styles";
import { useDevices } from "../../hooks/useDevices";
import OutlineButton from "../../components/OutlineButton";
import Input from "../../components/Input";
import { useTheme } from "styled-components";

interface IForm {
	model: string;
	os: string;
	currentOwner: string;
	notes: string;
}

const DeviceDetails: React.FC = () => {
	const [device, setDevice] = useState<Device>();
	const [qrString, setQrString] = useState("");

	const { updateDevice, deleteDevice, registerDevice } = useDevices();
	const navigate = useNavigate();
	const { state } = useLocation();
	const { Colors } = useTheme();
	const routeParams: any = state;

	const schema = Yup.object().shape({
		model: Yup.string().required(),
		os: Yup.string().required(),
		owner: Yup.string(),
		notes: Yup.string().required(),
	});

	const handleEdit = (formData: IForm) => {
		const updated: Device = {
			...formData,
			id: device!.id,
		};
		updateDevice(updated);
		navigate("/");
	};

	const handleDelete = (id: string) => {
		deleteDevice(id);
		navigate("/");
	};

	const handleCreate = (formData: IForm) => {
		const created: Device = {
			...formData,
			id: UUID(),
		};
		registerDevice(created);
		navigate("/");
	};

	const handleQrCode = (formData?: IForm) => {
		if (!formData?.model) {
			toast.error("Fill all fields first");
		} else {
			setQrString(
				`Model ${formData.model}\n OS ${formData.os}\n Notes ${formData.notes}`
			);
		}
	};

	useEffect(() => {
		console.log(routeParams);
		function getDeviceIfExists() {
			if (routeParams.edit && routeParams.device) {
				const alias = routeParams.device;
				setDevice(alias);
				setQrString(
					`Model ${alias.model}\n OS ${alias.os}\n Notes ${alias.notes}`
				);
			}
		}
		getDeviceIfExists();
	}, [routeParams]);

	return (
		<Layout>
			<S.Container>
				<Formik
					validateOnBlur={false}
					validateOnChange={false}
					enableReinitialize
					validationSchema={schema}
					initialValues={{
						model: device?.model || "",
						os: device?.os || "",
						currentOwner: device?.currentOwner || "",
						notes: device?.notes || "",
					}}
					onSubmit={(values) =>
						routeParams.edit ? handleEdit(values) : handleCreate(values)
					}
				>
					{({ values, handleChange, handleSubmit, errors, setFieldError }) => (
						<S.FormContainer>
							<Input
								icon={FiSmartphone}
								error={errors.model}
								focusCb={() => setFieldError("model", undefined)}
								label="Model: *"
								name="model"
								placeholder="Pixel 2, Iphone 13, ..."
								value={values.model}
								onChange={handleChange}
							/>
							<Input
								icon={FiServer}
								error={errors.os}
								focusCb={() => setFieldError("os", undefined)}
								label="OS: *"
								name="os"
								placeholder="Android, IOS, ..."
								value={values.os}
								onChange={handleChange}
							/>
							<Input
								icon={FiUser}
								error={errors.currentOwner}
								focusCb={() => setFieldError("currentOwner", undefined)}
								label="Current Owner: (optional)"
								name="currentOwner"
								placeholder="Daniel de Jesus"
								value={values.currentOwner}
								onChange={handleChange}
							/>
							<Input
								icon={FiPaperclip}
								error={errors.notes}
								focusCb={() => setFieldError("notes", undefined)}
								label="Notes: *"
								name="notes"
								placeholder="Some notes"
								value={values.notes}
								onChange={handleChange}
							/>
							<FilledButton
								className="submitBtn"
								type="submit"
								text="Submit"
								onClick={() => handleSubmit()}
							/>

							{routeParams.edit ? (
								<OutlineButton
									type="button"
									text="Delete"
									onClick={() => handleDelete(device!.id)}
								/>
							) : (
								<OutlineButton
									className="qrBtn"
									type="button"
									text="Generate QR Code"
									onClick={() => handleQrCode(values)}
								/>
							)}
						</S.FormContainer>
					)}
				</Formik>
				<S.QrContainer>
					{!device ? (
						<p>
							Fill all fields to <br />
							Generate a QR Code
						</p>
					) : (
						<p>
							Scan the QR Code to <br />
							get device info
						</p>
					)}
					{qrString ? (
						<QRCode
							className="qrCode"
							bgColor="transparent"
							fgColor={Colors.primaryText}
							value={qrString}
						/>
					) : (
						<img src={Draw} alt="Add Info" />
					)}
				</S.QrContainer>
			</S.Container>
		</Layout>
	);
};

export default DeviceDetails;
