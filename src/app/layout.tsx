import { siteConfig } from "@/config/site";
import { satoshi } from "@/lib/fonts";
import Provider from "@/provider";
import "@/styles/globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${satoshi.variable}`} lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
