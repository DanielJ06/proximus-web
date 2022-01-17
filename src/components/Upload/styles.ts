import styled, { css } from "styled-components";
import { CommonSizes } from "../../utils/uikit/sizes";

interface UploadProps {
	isDragReject: boolean;
}

const dragReject = () => css`
	border-color: ${(props) => props.theme.Colors.error};
`;

export const DropContainer = styled.div.attrs({
	className: "dropzone",
})`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${CommonSizes.XXXSmallest}px dashed
		${(props) => props.theme.Colors.border};
	border-radius: ${CommonSizes.XXSmallest};
	cursor: pointer;
	${(props: UploadProps) => props.isDragReject && dragReject()}
`;
export const UploadMessage = styled.p`
	color: ${(props) => props.theme.Colors.primaryText};
	display: flex;
	font-size: ${CommonSizes.Medium};
	line-height: ${CommonSizes.Biggest};
	padding: 48px 0;
	justify-content: center;
	align-items: center;
`;
