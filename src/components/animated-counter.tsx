"use client";

import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
	className?: string;
	decimals?: number;
	suffix?: string;
	value: number;
};

const AnimatedCounter = ({
	className,
	decimals = 0,
	suffix = "",
	value,
}: Props) => {
	const ref = useRef<HTMLSpanElement | null>(null);
	const motionValue = useMotionValue(0);
	const [displayValue, setDisplayValue] = useState(() =>
		Number(0).toFixed(decimals),
	);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const reduceMotion = useReducedMotion();

	useMotionValueEvent(motionValue, "change", (latest) => {
		setDisplayValue(Number(latest).toFixed(decimals));
	});

	useEffect(() => {
		if (!isInView) {
			return;
		}

		if (reduceMotion) {
			motionValue.set(value);
			return;
		}

		const controls = animate(motionValue, value, {
			duration: 1.1,
			ease: [0.22, 1, 0.36, 1],
		});

		return () => controls.stop();
	}, [isInView, motionValue, reduceMotion, value]);

	return (
		<motion.span className={className} ref={ref}>
			{displayValue}
			{suffix}
		</motion.span>
	);
};

export default AnimatedCounter;
