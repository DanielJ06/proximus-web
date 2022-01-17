import styled from "styled-components";

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
