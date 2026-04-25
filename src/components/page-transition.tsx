"use client";

import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
	useReducedMotion,
} from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pageTransition } from "@/lib/motion";
import { routes } from "@/utils/routes";

const pageBackgrounds: Record<string, string> = {
	[routes.home]: "bg-[#142FBB]",
	[routes.contact]: "bg-[#F5F8FF]",
};

const PageTransition = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const reduceMotion = useReducedMotion();
	const backgroundClassName = pageBackgrounds[pathname] ?? "bg-white";

	if (reduceMotion) {
		return <>{children}</>;
	}

	return (
		<div className={backgroundClassName}>
			<LazyMotion features={domAnimation}>
				<AnimatePresence mode="wait">
					<motion.div
						animate="animate"
						exit="exit"
						initial="initial"
						key={pathname}
						variants={pageTransition}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</LazyMotion>
		</div>
	);
};

export default PageTransition;
