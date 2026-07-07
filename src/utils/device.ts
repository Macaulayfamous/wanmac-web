import { routes } from "@/utils/routes";

export type StorePlatform = "apple" | "google";

export function getStorePlatform(userAgent: string): StorePlatform {
	const ua = userAgent.toLowerCase();

	if (/android/.test(ua)) {
		return "google";
	}

	if (/iphone|ipad|ipod/.test(ua)) {
		return "apple";
	}

	if (/macintosh|mac os x/.test(ua)) {
		return "apple";
	}

	return "google";
}

export function getStoreUrl(userAgent: string): string {
	return getStorePlatform(userAgent) === "apple"
		? routes.appStore
		: routes.playStore;
}
