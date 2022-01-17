import { createContext, useState } from "react";
import { ThemesEnum } from "../utils/uikit/themesEnum";

interface ThemeContextData {
	themeName: string;
	toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ThemeContextData>(
	{} as ThemeContextData
);

export const CustomThemeProvider: React.FC = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(ThemesEnum.dark);

	const toggle = () => {
		if (currentTheme === ThemesEnum.dark) {
			setCurrentTheme(ThemesEnum.light);
		} else {
			setCurrentTheme(ThemesEnum.dark);
		}
	};

	return (
		<CustomThemeContext.Provider
			value={{
				themeName: currentTheme,
				toggleTheme: toggle,
			}}
		>
			{children}
		</CustomThemeContext.Provider>
	);
};
