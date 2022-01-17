import styled, { css } from "styled-components";
import { CommonSizes } from "../../utils/uikit/sizes";

interface ContainerProps {
	isFocused: boolean;
	error?: string;
}

export const Container = styled.div<ContainerProps>`
	flex-direction: row;
	align-items: center;
	display: flex;

	width: 100%;
	min-height: 45px;

	padding-left: ${CommonSizes.Small}px;
	padding-right: ${CommonSizes.Small}px;
	margin-top: ${CommonSizes.XSmallest}px;
	margin-bottom: ${CommonSizes.Small}px;

	background-color: ${(props) => props.theme.Colors.input};
	border-radius: ${CommonSizes.Smallest}px;
	border: 2px solid transparent;
	${(containerProps) =>
		containerProps.isFocused &&
		css`
			border-color: ${(props) => props.theme.Colors.border};
		`}
	${(containerProps) =>
		containerProps.error &&
		css`
			border-color: ${(props) => props.theme.Colors.error};
		`};

	@media screen and (max-width: 767px) {
		padding: 8px;
		min-height: fit-content;
	}
`;

export const Label = styled.p`
	color: ${(props) => props.theme.Colors.primaryText};
	font-size: ${CommonSizes.Medium}px;
`;

export const TextInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 0;
	height: 80%;
	margin-left: ${CommonSizes.Small}px;
	color: ${(props) => props.theme.Colors.primaryText};
`;
