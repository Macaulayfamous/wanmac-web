import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
	title: "Home",
};

const HomePage = () => {
	return <PageClient />;
};

export default HomePage;
