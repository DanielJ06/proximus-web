import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DeviceProvider } from "./contexts/DeviceContext";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import { useToggleTheme } from "./hooks/useToggleTheme";
import Routes from "./routes";
import Global from "./styles/global";
import { Dark } from "./utils/uikit/themes/darkTheme";
import { Light } from "./utils/uikit/themes/lightTheme";
import { ThemesEnum } from "./utils/uikit/themesEnum";

function AppContent() {
	const { themeName } = useToggleTheme();

	return (
		<DeviceProvider>
			<ThemeProvider theme={themeName === ThemesEnum.dark ? Dark : Light}>
				<Global />
				<ToastContainer />
				<Routes />
			</ThemeProvider>
		</DeviceProvider>
	);
}

function App() {
	return (
		<CustomThemeProvider>
			<AppContent />
		</CustomThemeProvider>
	);
}

export default App;
