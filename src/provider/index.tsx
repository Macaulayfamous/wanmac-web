"use client";

import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { StoreLinkProvider } from "@/hooks/use-store-link";
import { theme } from "@/lib/theme";

const Provider = ({
	children,
	userAgent = "",
}: PropsWithChildren<{ userAgent?: string }>) => {
	return (
		<MantineProvider defaultColorScheme="light" theme={{ ...theme }}>
			<StoreLinkProvider userAgent={userAgent}>{children}</StoreLinkProvider>
		</MantineProvider>
	);
};

export default Provider;
