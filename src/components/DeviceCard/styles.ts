import styled from "styled-components";

export const Container = styled.span`
	background-color: ${(props) => props.theme.Colors.cardBackground};
	margin: 5px 0;
	border-radius: 10px;
	padding: 15px 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const InfoContainer = styled.div`
	margin-left: 15px;

	.title {
		font-weight: bold;
		color: ${(props) => props.theme.Colors.primaryText};
	}

	.subtitle {
		font-size: 14px;
		margin-top: 5px;
		color: ${(props) => props.theme.Colors.primaryText};
	}
`;
