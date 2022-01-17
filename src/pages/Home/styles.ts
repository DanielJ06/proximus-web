import styled from "styled-components";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	width: 100%;
	min-height: 500px;
	padding: 64px;

	background: ${(props) => props.theme.Colors.container};
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
	border-radius: 12px;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}
`;

export const DrawContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: 450px;

	h1 {
		color: ${(props) => props.theme.Colors.primaryText};
		@media screen and (max-width: 767px) {
			font-size: ${CommonSizes.Bigger}px;
		}
	}

	button {
		margin-top: 15px;
		@media screen and (max-width: 767px) {
			padding: 5px;
			min-height: 30px;
		}
	}

	p {
		@media screen and (max-width: 767px) {
			font-size: ${CommonSizes.Small}px;
		}
	}

	img {
		max-width: 350px;
		margin-top: 15px;
		@media screen and (max-width: 767px) {
			max-width: 150px;
		}
	}
`;

export const DeviceContentContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 450px;
	max-height: 500px;

	@media screen and (max-width: 767px) {
		width: 100%;
		max-height: 400px;
	}
`;

export const ActionsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 8px;

	p {
		@media screen and (max-width: 767px) {
			font-size: ${CommonSizes.Small}px;
		}
	}

	button {
		margin: 0 2.5px;
		@media screen and (max-width: 767px) {
			padding: 10px;
			min-height: 30px;
			margin-top: 15px;
		}
	}
`;

export const DevicesList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;
