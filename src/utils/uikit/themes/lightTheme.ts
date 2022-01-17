import { Colors } from "../colors";
import { ThemesEnum } from "../themesEnum";
import { ITheme } from "../../models/ITheme";

export const Light: ITheme = {
	Colors: {
		name: ThemesEnum.light,
		background: Colors.grey,
		container: Colors.white,
		icon: Colors.darkPurple,
		primaryText: Colors.darkPurple,
		secondaryText: Colors.purple,
		buttonBackground: Colors.darkPurple,
		buttonText: Colors.white,
		cardBackground: Colors.lightGrey,
		input: Colors.lightGrey,
		border: Colors.purple,
		statusBar: Colors.white,
		link: Colors.lightCobalt,
		error: Colors.red,
	},
};
