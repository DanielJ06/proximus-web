import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Upload from "../../components/Upload";
import { useDevices } from "../../hooks/useDevices";
import api from "../../services/parserApi";

import * as S from "./styles";

const ImportFile: React.FC = () => {
	const { registerMultipleDevices } = useDevices();
	const navigate = useNavigate();

	const handleUpload = async (files: File[]) => {
		if (files.length > 1) {
			toast.error("Upload one file at a time!");
			return;
		}

		const fileData = new FormData();
		const file = files[0];
		fileData.append("file", file, file.name);
		try {
			const toastId = toast.loading("We are processing your file!");
			const { data } = await api.post("uploadCsv", fileData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			if (data) {
				registerMultipleDevices(data.devices);
				toast.update(toastId, {
					render: "Successfully imported!",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				});
				navigate("/");
			}
		} catch (err) {
			toast.error("Something went wrong!");
			return;
		}
	};

	return (
		<Layout>
			<S.Container>
				<Upload onUpload={handleUpload} />
			</S.Container>
		</Layout>
	);
};

export default ImportFile;
