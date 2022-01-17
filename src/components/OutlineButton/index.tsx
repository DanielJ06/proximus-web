import React, { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	onClick: () => void;
}

const OutlineButton: React.FC<IButton> = ({ text, ...rest }) => (
	<S.Container {...rest}>
		<S.ButtonText>{text}</S.ButtonText>
	</S.Container>
);

export default OutlineButton;
