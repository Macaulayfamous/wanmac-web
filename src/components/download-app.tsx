"use client";

import { Box, Button, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import {
	domAnimation,
	LazyMotion,
	motion,
	useReducedMotion,
} from "motion/react";
import Image from "next/image";
import {
	buttonMotion,
	easeOutExpo,
	fadeUp,
	scaleIn,
	staggerContainer,
} from "@/lib/motion";
import downloadImage from "@/public/download_image.png";
import AppleLogo from "./icons/apple-logo";
import GooglePlayStore from "./icons/google-play-store";

const steps = [
	"Fast booking in a few taps",
	"Real-time tracking",
	"Secure payments",
	"Delivery history at your fingertips",
];

const DownloadApp = () => {
	const reduceMotion = useReducedMotion();

	return (
		<LazyMotion features={domAnimation}>
			<motion.div
				initial={reduceMotion ? undefined : "initial"}
				transition={{ duration: 0.6, ease: easeOutExpo }}
				variants={scaleIn}
				viewport={{ once: true, amount: 0.25 }}
				whileInView={reduceMotion ? undefined : "whileInView"}
			>
				<Paper
					className="bg-[#142FBB] px-6 pt-12 md:pt-24 md:pr-[38px] md:pl-[68px]"
					radius={15}
				>
					<SimpleGrid className="grid-cols-1 gap-10 text-white md:grid-cols-2 md:items-center">
						<motion.div
							animate={reduceMotion ? undefined : "animate"}
							initial={reduceMotion ? undefined : "initial"}
							variants={staggerContainer}
						>
							<Box>
								<motion.div variants={fadeUp}>
									<Text className="font-medium text-[36px] leading-[42px] -tracking-[0.16px] md:text-[56px] md:leading-[62px]">
										Download App
									</Text>
								</motion.div>
								<motion.div variants={fadeUp}>
									<Text className="mt-3 font-normal text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]">
										Take control of your deliveries anytime, anywhere.
									</Text>
								</motion.div>
								<motion.ul
									className="mt-4 list-disc pl-6 text-white"
									variants={staggerContainer}
								>
									{steps.map((step) => (
										<motion.li
											className="font-normal text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]"
											key={step}
											variants={fadeUp}
										>
											{step}
										</motion.li>
									))}
								</motion.ul>
								<motion.div variants={fadeUp}>
									<Group className="mt-8 flex-col gap-4 md:mt-10 md:flex-row">
										{/* <motion.div
											className="w-full md:w-auto"
											{...(reduceMotion ? {} : buttonMotion)}
										>
											<Link
												className="w-full md:w-auto"
												href={routes.playStore}
											>
												<Button
													className="h-14 w-full bg-white px-4 font-medium text-[#232323] text-sm leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
													leftSection={<GooglePlayStore />}
												>
													Download From PlayStore
												</Button>
											</Link>
										</motion.div>
										<motion.div
											className="w-full md:w-auto"
											{...(reduceMotion ? {} : buttonMotion)}
										>
											<Link className="w-full md:w-auto" href={routes.appStore}>
												<Button
													className="h-14 w-full border border-white bg-transparent px-4 font-normal text-sm text-white leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
													leftSection={<AppleLogo />}
												>
													Download From App Store
												</Button>
											</Link>
										</motion.div> */}
										<motion.div
											className="w-full md:w-auto"
											{...(reduceMotion ? {} : buttonMotion)}
										>
											<Button
												className="h-14 w-full bg-white px-4 font-medium text-[#232323] text-sm leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
												disabled
												leftSection={<GooglePlayStore />}
											>
												Coming soon on Play Store
											</Button>
										</motion.div>
										<motion.div
											className="w-full md:w-auto"
											{...(reduceMotion ? {} : buttonMotion)}
										>
											<Button
												className="h-14 w-full border border-white bg-transparent px-4 font-normal text-sm text-white leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
												disabled
												leftSection={<AppleLogo />}
											>
												Coming soon on App Store
											</Button>
										</motion.div>
									</Group>
								</motion.div>
							</Box>
						</motion.div>

						<motion.div
							whileInView={
								reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
							}
						>
							<Image
								alt="download app"
								className="h-auto w-full max-w-[480px] self-end justify-self-center md:max-w-none"
								src={downloadImage}
							/>
						</motion.div>
					</SimpleGrid>
				</Paper>
			</motion.div>
		</LazyMotion>
	);
};

export default DownloadApp;
