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

const PageTransition = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return <>{children}</>;
	}

	return (
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
	);
};

export default PageTransition;
