import { useContext } from "react";
import { CustomThemeContext } from "../contexts/ThemeContext";

export function useToggleTheme() {
	const context = useContext(CustomThemeContext);

	if (!context) {
		throw new Error("useToggleTheme must be inside an CustomThemeProvider");
	}

	return context;
}
