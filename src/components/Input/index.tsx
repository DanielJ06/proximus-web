import React, { InputHTMLAttributes, useState } from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";
import { CommonSizes } from "../../utils/uikit/sizes";
import { IconBaseProps } from "react-icons";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	icon: React.ComponentType<IconBaseProps>;
	error?: string;
	label?: string;
	focusCb?: () => void;
}

const Input: React.FC<IInput> = ({
	icon: Icon,
	focusCb,
	label,
	error,
	...rest
}) => {
	const [focused, setFocused] = useState(false);
	const { Colors } = useTheme();

	return (
		<React.Fragment>
			{label && <S.Label>{label}</S.Label>}
			<S.Container error={error} isFocused={focused}>
				{Icon ? <Icon size={CommonSizes.Big} color={Colors.icon} /> : <></>}
				<S.TextInput
					onFocus={() => {
						if (focusCb) {
							focusCb();
						}
						setFocused(true);
					}}
					onBlur={() => setFocused(false)}
					{...rest}
				/>
			</S.Container>
		</React.Fragment>
	);
};

export default Input;
