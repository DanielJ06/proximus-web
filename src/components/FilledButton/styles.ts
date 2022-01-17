import styled from "styled-components";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.button`
	align-items: center;
	justify-content: center;

	width: 100%;
	min-height: 42px;

	padding: ${CommonSizes.Medium}px;
	margin-top: ${CommonSizes.XSmallest}px;
	margin-bottom: ${CommonSizes.Small}px;

	background-color: ${(props) => props.theme.Colors.buttonBackground};
	border-radius: ${CommonSizes.Smallest}px;
	border: 0;

	@media screen and (max-width: 767px) {
		min-height: fit-content;
	}
`;

export const ButtonText = styled.p`
	color: ${(props) => props.theme.Colors.buttonText};
	font-weight: bold;
	font-size: ${CommonSizes.Big}px;

	@media screen and (max-width: 767px) {
		font-size: ${CommonSizes.Small}px;
	}
`;
