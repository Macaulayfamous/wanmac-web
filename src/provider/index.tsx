"use client";

import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { theme } from "@/lib/theme";

const Provider = ({ children }: PropsWithChildren) => {
	return (
		<MantineProvider defaultColorScheme="light" theme={{ ...theme }}>
			{children}
		</MantineProvider>
	);
};

export default Provider;
