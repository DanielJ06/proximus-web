import React, { ReactNode } from "react";

import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

interface UploadProps {
	onUpload: Function;
}

const Upload: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
	function renderDragMessage(
		isDragActive: boolean,
		isDragRejest: boolean
	): ReactNode {
		if (!isDragActive) {
			return <UploadMessage>Select or Drop the file</UploadMessage>;
		}

		if (isDragRejest) {
			return <UploadMessage>Unsupported file</UploadMessage>;
		}

		return <UploadMessage>Drop the file here</UploadMessage>;
	}

	return (
		<>
			<Dropzone
				accept=".csv, text/csv"
				onDropAccepted={(files) => onUpload(files)}
			>
				{({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
					<DropContainer
						{...getRootProps()}
						isDragActive={isDragActive}
						isDragReject={isDragReject}
					>
						<input {...getInputProps()} />
						{renderDragMessage(isDragActive, isDragReject)}
					</DropContainer>
				)}
			</Dropzone>
		</>
	);
};

export default Upload;
