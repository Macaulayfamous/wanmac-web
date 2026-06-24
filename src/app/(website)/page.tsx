import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Send, receive, and track packages in real-time with WanPadi. Fast, reliable local delivery in Nigeria. Book in seconds, track live, deliver faster.",
};

const HomePage = () => {
	return <PageClient />;
};

export default HomePage;
