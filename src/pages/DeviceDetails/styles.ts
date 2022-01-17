import styled from "styled-components";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	overflow: auto;

	width: 100%;
	min-height: 500px;
	padding: 64px;

	background: ${(props) => props.theme.Colors.container};
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
	border-radius: 12px;

	@media screen and (max-width: 767px) {
		flex-direction: column-reverse;
		align-items: center;
		padding: 20px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	max-width: 450px;

	@media screen and (max-width: 767px) {
		margin-top: ${CommonSizes.Bigger}px;

		.qrBtn {
			display: none;
		}
	}
`;

export const QrContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: 450px;

	@media screen and (max-width: 767px) {
		display: none;
	}

	p {
		color: ${(props) => props.theme.Colors.primaryText};
		font-size: ${CommonSizes.Bigger}px;
		font-weight: bold;
		text-align: center;
	}

	img {
		max-width: 450px;
		@media screen and (max-width: 767px) {
			max-width: 150px;
		}
	}
`;
