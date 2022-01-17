import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Device } from "../../utils/models/device";

import * as S from "./styles";

interface ICardProps {
	device: Device;
}

const DeviceCard: React.FC<ICardProps> = ({ device }) => {
	const { Colors } = useTheme();
	const navigate = useNavigate();

	return (
		<S.Container
			onClick={() =>
				navigate("/details", {
					state: {
						edit: true,
						device: device,
					},
				})
			}
		>
			<FiSmartphone color={Colors.icon} size={32} />
			<S.InfoContainer>
				<p className="title">{device.model}</p>
				<p className="subtitle">{device.os}</p>
			</S.InfoContainer>
		</S.Container>
	);
};

export default DeviceCard;
