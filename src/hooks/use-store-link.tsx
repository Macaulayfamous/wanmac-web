"use client";

import { createContext, useContext } from "react";
import { getStoreUrl } from "@/utils/device";
import { routes } from "@/utils/routes";

const StoreLinkContext = createContext<string | null>(null);

export const StoreLinkProvider = ({
	children,
	userAgent,
}: {
	children: React.ReactNode;
	userAgent: string;
}) => {
	const storeUrl = userAgent ? getStoreUrl(userAgent) : routes.playStore;

	return (
		<StoreLinkContext.Provider value={storeUrl}>
			{children}
		</StoreLinkContext.Provider>
	);
};

export function useStoreLink(): string {
	const storeUrl = useContext(StoreLinkContext);

	return storeUrl ?? routes.playStore;
}
