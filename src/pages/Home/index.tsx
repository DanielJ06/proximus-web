import React, { useRef } from "react";
import { CSVLink } from "react-csv";
import { v4 as UUID } from "uuid";

import Layout from "../../components/Layout";
import Draw from "../../assets/illustration.svg";
import { useDevices } from "../../hooks/useDevices";

import * as S from "./styles";
import DeviceCard from "../../components/DeviceCard";
import FilledButton from "../../components/FilledButton";
import OutlineButton from "../../components/OutlineButton";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
	const { devices } = useDevices();
	const { toggleTheme } = useToggleTheme();
	const navigate = useNavigate();
	const csvLinkRef = useRef<any>(null);

	const handleExport = () => {
		csvLinkRef?.current?.link.click();
	};

	return (
		<Layout>
			<S.Container>
				<S.DrawContainer>
					<h1>Welcome</h1>
					<img src={Draw} alt="Programmer" />
					<div style={{ width: "60%" }}>
						<OutlineButton onClick={() => toggleTheme()} text="Switch theme" />
					</div>
				</S.DrawContainer>

				<S.DeviceContentContainer>
					<S.ActionsContainer>
						<FilledButton onClick={() => navigate("import")} text="Import" />
						<>
							<CSVLink
								filename={`devices-${UUID()}.csv`}
								target="_blank"
								ref={csvLinkRef}
								data={devices}
							/>
							<FilledButton onClick={() => handleExport()} text="Export" />
						</>
						<FilledButton
							onClick={() =>
								navigate("details", {
									state: {
										edit: false,
									},
								})
							}
							text="Create"
						/>
					</S.ActionsContainer>

					<S.DevicesList>
						{devices.map((device) => (
							<DeviceCard key={device.id} device={device} />
						))}
					</S.DevicesList>
				</S.DeviceContentContainer>
			</S.Container>
		</Layout>
	);
};

export default Home;
