"use client";

import {
	Box,
	Button,
	Flex,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
	useReducedMotion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedCounter from "@/components/animated-counter";
import DownloadApp from "@/components/download-app";
import ArrowTop from "@/components/icons/arrow-top";
import VehicleApproved from "@/components/icons/vehicle-approved";
import PageWrapper from "@/components/page-wrapper";
import {
	buttonMotion,
	easeOutExpo,
	fadeUp,
	scaleIn,
	slideLeft,
	slideRight,
	springTransition,
	staggerContainer,
} from "@/lib/motion";
import analytics from "@/public/analytics.png";
import deliveryMan from "@/public/delivery-man.png";
import hero from "@/public/hero.png";
import mockup from "@/public/mockup.png";
import { routes } from "@/utils/routes";
import { faqs, howItWorksSteps, stats } from "./extras";

const PageClient = () => {
	const [activeStep, setActiveStep] = useState(howItWorksSteps[0]?.id);
	const [activeFaq, setActiveFaq] = useState(faqs[0]?.question);
	const reduceMotion = useReducedMotion();

	return (
		<LazyMotion features={domAnimation}>
			<Box component="main">
				<Box
					className="min-h-[calc(100vh-104px)] bg-[#142FBB] pt-14 md:pt-[91px]"
					component="header"
				>
					<PageWrapper>
						<SimpleGrid className="grid-cols-1 items-center gap-10 md:grid-cols-[45%_55%]">
							<motion.div
								animate={reduceMotion ? undefined : "animate"}
								initial={reduceMotion ? undefined : "initial"}
								variants={staggerContainer}
							>
								<Stack className="gap-y-8 md:gap-y-[53px]">
									<Stack className="gap-y-4">
										<motion.div variants={fadeUp}>
											<Text className="font-medium text-[40px] text-white leading-[46px] -tracking-[0.16px] md:text-[60px] md:leading-[66px]">
												Move Smarter. Deliver{" "}
												<Text className="sm:block" inherit span>
													Faster.
												</Text>
											</Text>
										</motion.div>
										<motion.div variants={fadeUp}>
											<Text className="font-normal text-[#DFE2EB] text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]">
												A reliable way to send, receive, and track deliveries in
												real-time. Built for speed, designed for convenience.
											</Text>
										</motion.div>
									</Stack>
									<motion.div
										variants={fadeUp}
										{...(reduceMotion ? {} : buttonMotion)}
									>
										{/* <Link href="">
											<Button className="h-14 w-[170px] rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px]">
												Download app
											</Button>
										</Link> */}
										<Button
											className="h-14 w-[170px] rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px] opacity-90"
											disabled
										>
											Coming soon
										</Button>
									</motion.div>
								</Stack>
							</motion.div>

							<motion.div
								animate={
									reduceMotion
										? undefined
										: {
												y: [0, -6, 0],
												scale: [1, 1.015, 1],
											}
								}
								initial={
									reduceMotion ? undefined : { opacity: 0, y: 28, scale: 0.97 }
								}
								transition={
									reduceMotion
										? undefined
										: {
												opacity: { duration: 0.7, ease: easeOutExpo },
												y: {
													duration: 5.5,
													repeat: Number.POSITIVE_INFINITY,
													ease: "easeInOut",
												},
												scale: {
													duration: 5.5,
													repeat: Number.POSITIVE_INFINITY,
													ease: "easeInOut",
												},
											}
								}
								whileInView={
									reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
								}
							>
								<Image alt="hero" className="h-auto w-full" src={hero} />
							</motion.div>
						</SimpleGrid>
					</PageWrapper>
				</Box>

				<motion.section
					className="bg-white pt-20 pb-12 md:pt-[158px] md:pb-[62px]"
					initial={reduceMotion ? undefined : "initial"}
					transition={{ duration: 0.6, ease: easeOutExpo }}
					variants={fadeUp}
					viewport={{ once: true, amount: 0.25 }}
					whileInView={reduceMotion ? undefined : "whileInView"}
				>
					<PageWrapper>
						<SimpleGrid className="grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-x-[54px]">
							<motion.div
								initial={reduceMotion ? undefined : "initial"}
								transition={{ duration: 0.6, ease: easeOutExpo }}
								variants={slideLeft}
								viewport={{ once: true, amount: 0.25 }}
								whileInView={reduceMotion ? undefined : "whileInView"}
							>
								<Image
									alt="mockup"
									className="h-auto w-full max-w-[520px]"
									src={mockup}
								/>
							</motion.div>
							<motion.div
								initial={reduceMotion ? undefined : "initial"}
								transition={{ duration: 0.6, ease: easeOutExpo }}
								variants={slideRight}
								viewport={{ once: true, amount: 0.25 }}
								whileInView={reduceMotion ? undefined : "whileInView"}
							>
								<Stack gap={15}>
									<Text className="font-medium text-[#0E1628] text-[32px] leading-[42px] md:text-[44px] md:leading-[59px]">
										Our platform connects customers, riders, and businesses.
									</Text>
									<Text className="font-normal text-[#666E82] text-base leading-7 md:text-lg md:leading-[30px]">
										We&apos;re redefining how deliveries work, making them
										faster, safer, and more transparent. Whether you&apos;re
										sending a package across town or running a business that
										depends on logistics, we provide a seamless experience from
										pickup to delivery.
									</Text>
								</Stack>
							</motion.div>
						</SimpleGrid>
					</PageWrapper>
				</motion.section>

				<motion.section
					className="bg-white py-24"
					initial={reduceMotion ? undefined : "initial"}
					transition={{ duration: 0.6, ease: easeOutExpo }}
					variants={scaleIn}
					viewport={{ once: true, amount: 0.25 }}
					whileInView={reduceMotion ? undefined : "whileInView"}
				>
					<PageWrapper>
						<motion.div
							transition={springTransition}
							whileHover={reduceMotion ? undefined : { scale: 1.01 }}
						>
							<Paper
								className="bg-[#080808] px-6 py-12 md:px-[69px] md:py-24"
								radius={24}
							>
								<Stack className="gap-y-16">
									<SimpleGrid className="grid-cols-1 gap-6 md:grid-cols-2">
										<Text className="font-medium text-[32px] text-white leading-[42px] md:text-[44px] md:leading-[54px]">
											Our numbers talking{" "}
											<Text className="block" inherit span>
												by themselves
											</Text>
										</Text>
										<Text className="max-w-[452px] font-normal text-[#BFC6D6] text-base leading-7 md:text-lg md:leading-[30px]">
											From fast pickups to live tracking and secure checkout,
											our platform is built to help customers, riders, and
											businesses move deliveries with speed, confidence, and
											full visibility.
										</Text>
									</SimpleGrid>
									<motion.div
										animate={reduceMotion ? undefined : "animate"}
										initial={reduceMotion ? undefined : "initial"}
										variants={staggerContainer}
									>
										<Flex className="flex-wrap justify-between gap-y-8 md:gap-y-0">
											{stats.map((item, index) => (
												<motion.div
													key={`stats-${index}`}
													transition={springTransition}
													variants={fadeUp}
													whileHover={reduceMotion ? undefined : { y: -4 }}
												>
													<Box className="w-[47%] text-white md:w-auto">
														<Text className="font-medium text-[44px] leading-[52px] md:text-[72px] md:leading-[80px]">
															<AnimatedCounter
																decimals={item.value % 1 === 0 ? 0 : 1}
																value={item.value}
															/>
															<Text className="text-[#3455FF]" inherit span>
																{item.unit}
															</Text>
														</Text>
														<Text className="font-normal text-lg leading-5">
															{item.text}
														</Text>
													</Box>
												</motion.div>
											))}
										</Flex>
									</motion.div>
								</Stack>
							</Paper>
						</motion.div>
					</PageWrapper>
				</motion.section>

				<motion.section
					className="bg-white pb-16 md:pb-24"
					initial={reduceMotion ? undefined : "initial"}
					transition={{ duration: 0.6, ease: easeOutExpo }}
					variants={fadeUp}
					viewport={{ once: true, amount: 0.25 }}
					whileInView={reduceMotion ? undefined : "whileInView"}
				>
					<PageWrapper>
						<Stack className="gap-y-12">
							<Title className="max-w-[680px] font-medium text-[#0E1628] text-[32px] leading-[42px] md:text-[44px] md:leading-[54px]">
								How It Works - Our simple yet powerful process
							</Title>
							<SimpleGrid className="grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-x-[82px]">
								<motion.div
									animate={reduceMotion ? undefined : "animate"}
									initial={reduceMotion ? undefined : "initial"}
									variants={staggerContainer}
								>
									<Stack>
										{howItWorksSteps.map((step, index) => {
											const isActive = activeStep === step.id;
											const isLast = index === howItWorksSteps.length - 1;

											return (
												<motion.div
													key={step.id}
													transition={springTransition}
													variants={fadeUp}
													whileHover={
														reduceMotion ? undefined : { scale: 1.01 }
													}
													whileTap={reduceMotion ? undefined : { scale: 0.99 }}
												>
													<Box
														className={`relative ${!isLast ? "border-[#D9E2FF] border-b" : ""} py-8`}
													>
														{!isLast ? (
															<motion.div
																initial={
																	reduceMotion ? undefined : { scaleY: 0 }
																}
																transition={{
																	duration: 0.7,
																	ease: easeOutExpo,
																	delay: 0.1 * index,
																}}
																whileInView={
																	reduceMotion ? undefined : { scaleY: 1 }
																}
															/>
														) : null}
														<button
															className="w-full cursor-pointer text-left"
															onClick={() =>
																setActiveStep(isActive ? "" : step.id)
															}
															type="button"
														>
															<Flex className="items-start justify-between gap-x-4">
																<Flex className="flex-1 items-start gap-x-5">
																	<motion.div
																		initial={
																			reduceMotion
																				? undefined
																				: { opacity: 0, scale: 0.7 }
																		}
																		transition={{
																			duration: 0.45,
																			ease: easeOutExpo,
																			delay: 0.08 * index,
																		}}
																		whileInView={
																			reduceMotion
																				? undefined
																				: { opacity: 1, scale: 1 }
																		}
																	>
																		<Image
																			alt=""
																			className="h-auto w-10 md:w-auto"
																			src={step.icon}
																		/>
																	</motion.div>
																	<Stack gap={isActive ? 10 : 0}>
																		<Text className="font-medium text-[#182033] text-[18px] leading-[28px] md:text-[22px] md:leading-[32px]">
																			{step.title}
																		</Text>
																		<AnimatePresence initial={false}>
																			{isActive ? (
																				<motion.div
																					animate={{
																						opacity: 1,
																						height: "auto",
																					}}
																					exit={{ opacity: 0, height: 0 }}
																					initial={{ opacity: 0, height: 0 }}
																					transition={{
																						duration: 0.3,
																						ease: easeOutExpo,
																					}}
																				>
																					<Text className="font-normal text-[#444B5A] text-base leading-7 md:text-[18px] md:leading-[30px]">
																						{step.description}
																					</Text>
																				</motion.div>
																			) : null}
																		</AnimatePresence>
																	</Stack>
																</Flex>
																<motion.span
																	animate={{ rotate: isActive ? 45 : 0 }}
																	className="mt-1 min-w-4 text-right font-normal text-[#182033] text-[30px] leading-6 md:text-[36px]"
																	transition={springTransition}
																>
																	+
																</motion.span>
															</Flex>
														</button>
													</Box>
												</motion.div>
											);
										})}
									</Stack>
								</motion.div>

								<motion.div
									animate={
										reduceMotion
											? undefined
											: {
													y: [0, -6, 0],
												}
									}
									initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
									transition={
										reduceMotion
											? undefined
											: {
													opacity: { duration: 0.6, ease: easeOutExpo },
													y: {
														duration: 4.8,
														repeat: Number.POSITIVE_INFINITY,
														ease: "easeInOut",
													},
												}
									}
									whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
								>
									<Image
										alt="delivery man"
										className="h-auto w-full max-w-[520px]"
										src={deliveryMan}
									/>
								</motion.div>
							</SimpleGrid>
						</Stack>
					</PageWrapper>
				</motion.section>

				<motion.section
					className="scroll-mt-20 bg-white pb-16 md:pb-[96px]"
					id="faq"
					initial={reduceMotion ? undefined : "initial"}
					transition={{ duration: 0.6, ease: easeOutExpo }}
					variants={fadeUp}
					viewport={{ once: true, amount: 0.25 }}
					whileInView={reduceMotion ? undefined : "whileInView"}
				>
					<PageWrapper>
						<SimpleGrid className="grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16">
							<motion.div
								initial={reduceMotion ? undefined : "initial"}
								transition={{ duration: 0.6, ease: easeOutExpo }}
								variants={slideLeft}
								viewport={{ once: true, amount: 0.25 }}
								whileInView={reduceMotion ? undefined : "whileInView"}
							>
								<Stack className="gap-y-10">
									<Stack className="gap-y-[18px]">
										<Group className="gap-x-3">
											<Box className="h-px w-10 bg-[linear-gradient(269.98deg,#96784D_0%,rgba(150,120,77,0)_100%)]" />
											<Text className="font-normal text-[#636362] text-lg leading-[27px] -tracking-[0.16px]">
												FAQ&apos;s
											</Text>
											<Box className="h-px w-10 bg-[linear-gradient(269.98deg,#96784D_0%,rgba(150,120,77,0)_100%)]" />
										</Group>
										<Title className="font-medium text-[#232323] text-[36px] leading-[44px] -tracking-[0.16px] md:text-[56px] md:leading-[62px]">
											Frequently asked questions
										</Title>
									</Stack>
									<motion.div {...(reduceMotion ? {} : buttonMotion)}>
										<Link className="w-fit" href={routes.contact}>
											<Button className="h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px]">
												Contact Us
											</Button>
										</Link>
									</motion.div>
								</Stack>
							</motion.div>

							<motion.div
								animate={reduceMotion ? undefined : "animate"}
								initial={reduceMotion ? undefined : "initial"}
								variants={staggerContainer}
							>
								<Stack className="gap-y-4">
									{faqs.map((item) => {
										const isOpen = activeFaq === item.question;

										return (
											<motion.div key={item.question} variants={fadeUp}>
												<motion.div
													className="overflow-hidden rounded-2xl bg-[#F5F4F3]"
													transition={springTransition}
													whileHover={reduceMotion ? undefined : { y: -2 }}
												>
													<button
														className="w-full px-5 py-4 text-left md:px-6 md:py-5"
														onClick={() =>
															setActiveFaq(isOpen ? "" : item.question)
														}
														type="button"
													>
														<Flex className="items-start justify-between gap-4">
															<Text className="pl-2 font-bold text-[#232323] text-[20px] leading-7 md:pl-4 md:text-[28px] md:leading-9">
																{item.question}
															</Text>
															<motion.span
																animate={{ rotate: isOpen ? 45 : 0 }}
																className="mt-1 text-[#7E8597] text-[28px] leading-6"
																transition={springTransition}
															>
																+
															</motion.span>
														</Flex>
													</button>

													<AnimatePresence initial={false}>
														{isOpen ? (
															<motion.div
																animate={{ opacity: 1, height: "auto" }}
																exit={{ opacity: 0, height: 0 }}
																initial={{ opacity: 0, height: 0 }}
																transition={{
																	duration: 0.28,
																	ease: easeOutExpo,
																}}
															>
																<Box className="px-6 pt-0 pb-5">
																	<Text className="font-normal text-[#666E82] text-base leading-6">
																		{item.answer}
																	</Text>
																</Box>
															</motion.div>
														) : null}
													</AnimatePresence>
												</motion.div>
											</motion.div>
										);
									})}
								</Stack>
							</motion.div>
						</SimpleGrid>
					</PageWrapper>
				</motion.section>

				<motion.section
					className="bg-white pb-16 md:pb-[82px]"
					initial={reduceMotion ? undefined : "initial"}
					transition={{ duration: 0.6, ease: easeOutExpo }}
					variants={fadeUp}
					viewport={{ once: true, amount: 0.25 }}
					whileInView={reduceMotion ? undefined : "whileInView"}
				>
					<PageWrapper>
						<motion.div
							animate={reduceMotion ? undefined : "animate"}
							initial={reduceMotion ? undefined : "initial"}
							variants={staggerContainer}
						>
							<SimpleGrid className="grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-7">
								<motion.div
									variants={fadeUp}
									// {...(reduceMotion ? {} : cardHover)}
								>
									<Paper
										className="h-full bg-[#F5F4F3] px-6 py-10 md:pt-5 md:pr-7 md:pb-16 md:pl-[54px]"
										radius={24}
									>
										<Stack className="gap-y-[14px]">
											<Group className="justify-end">
												<ArrowTop />
											</Group>
											<Flex className="gap-x-4">
												<Image
													alt="analytics"
													className="h-12 w-[50px]"
													src={analytics}
												/>
												<Stack gap={7}>
													<Text className="font-medium text-2xl text-[#0E1628] leading-8">
														For Customers
													</Text>
													<Text className="font-normal text-[#666E82] text-base leading-7 md:text-lg md:leading-[30px]">
														Power your business with reliable delivery. We help{" "}
														businesses scale with fast, efficient, and trackable
														logistics solutions.
													</Text>
												</Stack>
											</Flex>
										</Stack>
									</Paper>
								</motion.div>

								<motion.div
									variants={fadeUp}
									// {...(reduceMotion ? {} : cardHover)}
								>
									<Paper
										className="bg-[#0E1628] px-6 py-10 md:px-[38px] md:py-[72px]"
										radius={24}
									>
										<Flex className="gap-4">
											<VehicleApproved />
											<Stack className="flex-1" gap={7}>
												<Text className="font-medium text-2xl text-white">
													Become a Rider
												</Text>
												<Text className="font-normal text-[#BFC6D6] text-base leading-7 md:text-lg md:leading-[27px]">
													Earn on your own schedule. Join our network of trusted
													riders and start making money delivering packages in
													your area.
												</Text>
											</Stack>
											<ArrowTop className="text-white" />
										</Flex>
									</Paper>
								</motion.div>
							</SimpleGrid>
						</motion.div>
					</PageWrapper>
				</motion.section>

				<Box className="bg-white pb-20 md:pb-[150px]" component="section">
					<PageWrapper>
						<DownloadApp />
					</PageWrapper>
				</Box>
			</Box>
		</LazyMotion>
	);
};

export default PageClient;
