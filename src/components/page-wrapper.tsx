import { Box } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
};

const PageWrapper = ({ className, children }: PropsWithChildren<Props>) => {
	return <Box className={cn("mx-auto w-11/12", className)}>{children}</Box>;
};

export default PageWrapper;
