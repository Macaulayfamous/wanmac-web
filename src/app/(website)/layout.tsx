import { Box } from "@mantine/core";
import type { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Box className="flex flex-col">
			<Navbar />
			<PageTransition>
				<Box component="main">{children}</Box>
			</PageTransition>
			<Footer />
		</Box>
	);
};

export default Layout;
