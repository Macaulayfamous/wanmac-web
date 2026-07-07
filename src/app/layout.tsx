import { siteConfig } from "@/config/site";
import { satoshi } from "@/lib/fonts";
import Provider from "@/provider";
import "@/styles/globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import type { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	openGraph: {
		type: "website",
		locale: "en_NG",
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.name,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const headersList = await headers();
	const userAgent = headersList.get("user-agent") ?? "";

	return (
		<html className={`${satoshi.variable}`} lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<Provider userAgent={userAgent}>{children}</Provider>
			</body>
		</html>
	);
}
