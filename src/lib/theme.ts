import { createTheme, type MantineThemeOverride } from "@mantine/core";
import { satoshi } from "./fonts";

export const theme: MantineThemeOverride = createTheme({
	fontFamily: satoshi.style.fontFamily,
	colors: {
		primary: [
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
			"#101828",
		],
	},
	cursorType: "pointer",
	primaryColor: "primary",
	headings: {
		fontWeight: "700",
		fontFamily: satoshi.style.fontFamily,
		sizes: {
			h1: {
				fontSize: "48px",
			},
			h2: {
				fontSize: "40px",
			},
			h3: {
				fontSize: "32px",
			},
			h4: {
				fontSize: "24px",
			},
			h5: {
				fontSize: "20px",
			},
		},
	},
});
