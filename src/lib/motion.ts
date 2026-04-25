import type { Transition, Variants } from "motion/react";

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const springTransition: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 20,
};

export const pageTransition: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: easeOutExpo },
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: { duration: 0.25, ease: easeOutExpo },
	},
};

export const fadeUp: Variants = {
	initial: { opacity: 0, y: 40 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
	whileInView: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
};

export const fadeDown: Variants = {
	initial: { opacity: 0, y: -20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: easeOutExpo },
	},
};

export const scaleIn: Variants = {
	initial: { opacity: 0, scale: 0.96 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
	whileInView: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
};

export const slideLeft: Variants = {
	initial: { opacity: 0, x: -40 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
	whileInView: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
};

export const slideRight: Variants = {
	initial: { opacity: 0, x: 40 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
	whileInView: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: easeOutExpo },
	},
};

export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
		},
	},
	whileInView: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
		},
	},
};

export const cardHover = {
	whileHover: { scale: 1.02, y: -4 },
	whileTap: { scale: 0.98 },
	transition: springTransition,
};

export const buttonMotion = {
	whileHover: { scale: 1.03 },
	whileTap: { scale: 0.97 },
	transition: springTransition,
};
