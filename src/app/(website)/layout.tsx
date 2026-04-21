import { Box } from "@mantine/core";
import type { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Box className="flex flex-col">
			<Navbar />
			<Box component="main">{children}</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
