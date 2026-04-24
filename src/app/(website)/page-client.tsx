"use client";
import {
	Accordion,
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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DownloadApp from "@/components/download-app";
import ArrowTop from "@/components/icons/arrow-top";
import VehicleApproved from "@/components/icons/vehicle-approved";
import PageWrapper from "@/components/page-wrapper";
import analytics from "@/public/analytics.png";
import deliveryMan from "@/public/delivery-man.png";
import getMatchedImg from "@/public/get-matched.svg";
import hero from "@/public/hero.png";
import mockup from "@/public/mockup.png";
import requestDeliveryImg from "@/public/Order Product Icon - Maptech X Webflow Template.svg";
import recordTimeImg from "@/public/record-time.svg";
import { routes } from "@/utils/routes";
import { stats } from "./extras";

const faqs = [
	{
		question: "How long does delivery take?",
		answer:
			"Most local deliveries arrive the same day, depending on distance, traffic, and rider availability.",
	},
	{
		question: "Can I track my package?",
		answer: "Yes. The app shows live tracking from pickup to final drop-off.",
	},
	{
		question: "How do I pay?",
		answer:
			"You can pay securely in the app using the payment options shown at checkout.",
	},
	{
		question: "Who are the riders?",
		answer:
			"Our riders are verified delivery partners trained to handle packages safely and on time.",
	},
	{
		question: "What if there’s an issue with my delivery?",
		answer:
			"Contact support in the app or through our contact page and we’ll help resolve it quickly.",
	},
];

const howItWorksSteps = [
	{
		id: "request",
		icon: requestDeliveryImg,
		title: "1. Request a Delivery",
		description: "Enter pickup and drop-off details in seconds.",
		accent: "bg-[#4A63FF]",
	},
	{
		id: "matched",
		icon: getMatchedImg,
		title: "2. Get Matched Instantly",
		description:
			"We assign an available rider as soon as your order is confirmed.",
		accent: "bg-[#57C76F]",
	},
	{
		id: "receive",
		icon: recordTimeImg,
		title: "3. Receive it in record time",
		description:
			"Track your package live and receive it at the selected destination.",
		accent: "bg-[#4A63FF]",
	},
];

const PageClient = () => {
	const [activeStep, setActiveStep] = useState(howItWorksSteps?.[0]?.id);

	return (
		<Box component="main">
			<Box className="bg-[#142FBB] pt-14 md:pt-[91px]" component="header">
				<PageWrapper>
					<SimpleGrid className="grid-cols-1 items-center gap-10 md:grid-cols-2">
						<Stack className="gap-y-8 md:gap-y-[53px]">
							<Stack className="gap-y-4">
								<Text className="font-medium text-[40px] text-white leading-[46px] -tracking-[0.16px] md:text-[60px] md:leading-[66px]">
									Move Smarter. Deliver{" "}
									<Text className="sm:block" inherit span>
										Faster.
									</Text>
								</Text>
								<Text className="font-normal text-[#DFE2EB] text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]">
									A reliable way to send, receive, and track deliveries in
									real-time. Built for speed, designed for convenience.
								</Text>
							</Stack>
							<Link href="">
								<Button className="h-14 w-[170px] rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px]">
									Download app
								</Button>
							</Link>
						</Stack>
						<Image alt="hero" className="h-auto w-full" src={hero} />
					</SimpleGrid>
				</PageWrapper>
			</Box>
			<Box
				className="pt-20 pb-12 md:pt-[158px] md:pb-[62px]"
				component="section"
			>
				<PageWrapper>
					<SimpleGrid className="grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-x-[54px]">
						<Image
							alt="mockup"
							className="h-auto w-full max-w-[520px]"
							src={mockup}
						/>
						<Stack gap={15}>
							<Text className="font-medium text-[#0E1628] text-[32px] leading-[42px] md:text-[44px] md:leading-[59px]">
								Our platform connects customers, riders, and businesses.
							</Text>
							<Text className="font-normal text-[#666E82] text-base leading-7 md:text-lg md:leading-[30px]">
								We're redefining how deliveries work—making them faster, safer,
								and more transparent. Whether you're sending a package across
								town or running a business that depends on logistics, we provide
								a seamless experience from pickup to delivery.
							</Text>
						</Stack>
					</SimpleGrid>
				</PageWrapper>
			</Box>

			<Box className="py-24" component="section">
				<PageWrapper>
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
									From fast pickups to live tracking and secure checkout, our
									platform is built to help customers, riders, and businesses
									move deliveries with speed, confidence, and full visibility.
								</Text>
							</SimpleGrid>
							<Flex className="flex-wrap justify-between gap-y-8 md:gap-y-0">
								{stats.map((item, index) => (
									<Box
										className="w-[47%] text-white md:w-auto"
										key={`stats-${index}`}
									>
										<Text className="font-medium text-[44px] leading-[52px] md:text-[72px] md:leading-[80px]">
											{item?.value}
											<Text className="text-[#3455FF]" inherit span>
												{item?.unit}
											</Text>
										</Text>
										<Text className="font-normal text-lg leading-5">
											{item?.text}
										</Text>
									</Box>
								))}
							</Flex>
						</Stack>
					</Paper>
				</PageWrapper>
			</Box>

			<Box className="pb-16 md:pb-24" component="section">
				<PageWrapper>
					<Stack className="gap-y-12">
						<Title className="max-w-[680px] font-medium text-[#0E1628] text-[32px] leading-[42px] md:text-[44px] md:leading-[54px]">
							How It Works - Our simple yet powerful process
						</Title>
						<SimpleGrid className="grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-x-[82px]">
							<Stack>
								{howItWorksSteps.map((step, index) => {
									const isActive = activeStep === step.id;

									return (
										<Box
											className={`${index !== howItWorksSteps.length - 1 ? "border-[#D9E2FF] border-b" : ""} py-8`}
											key={step.id}
										>
											<button
												className="w-full cursor-pointer text-left"
												onClick={() => setActiveStep(isActive ? "" : step.id)}
												type="button"
											>
												<Flex className="items-start justify-between gap-x-4">
													<Flex className="flex-1 items-start gap-x-5">
														<Image
															alt=""
															className="h-auto w-10 md:w-auto"
															src={step.icon}
														/>
														<Stack gap={isActive ? 10 : 0}>
															<Text className="font-medium text-[#182033] text-[18px] leading-[28px] md:text-[22px] md:leading-[32px]">
																{step.title}
															</Text>
															{isActive ? (
																<Text className="font-normal text-[#444B5A] text-base leading-7 md:text-[18px] md:leading-[30px]">
																	{step.description}
																</Text>
															) : null}
														</Stack>
													</Flex>
													<Text className="mt-1 min-w-4 text-right font-normal text-[#182033] text-[30px] leading-6 md:text-[36px]">
														{isActive ? "−" : "+"}
													</Text>
												</Flex>
											</button>
										</Box>
									);
								})}
							</Stack>
							<Image
								alt="delivery man"
								className="h-auto w-full max-w-[520px]"
								src={deliveryMan}
							/>
						</SimpleGrid>
					</Stack>
				</PageWrapper>
			</Box>

			<Box className="pb-16 md:pb-[96px]" component="section">
				<PageWrapper>
					<SimpleGrid className="grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16">
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
							<Link className="w-fit" href={routes.contact}>
								<Button className="h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px]">
									Contact Us
								</Button>
							</Link>
						</Stack>

						<Accordion
							chevronPosition="right"
							classNames={{
								item: "mb-4 overflow-hidden rounded-2xl border-0 bg-[#F5F4F3]",
								control:
									"bg-[#F5F4F3] px-5 py-4 font-normal text-[16px] leading-[22px] text-[#232323] hover:bg-[#F5F4F3] md:px-6 md:py-5 md:text-[18px] md:leading-[24px]",
								panel: "bg-[#F5F4F3] px-6 pb-5 pt-0",
								content: "font-normal text-base leading-[24px] text-[#666E82]",
								chevron: "text-[#7E8597]",
							}}
							defaultValue="How long does delivery take?"
							variant="contained"
						>
							{faqs.map((item) => (
								<Accordion.Item key={item.question} value={item.question}>
									<Accordion.Control className="pl-2 font-bold text-[#232323] text-[20px] leading-7 md:pl-4 md:text-[28px] md:leading-9">
										{item.question}
									</Accordion.Control>
									<Accordion.Panel className="pl-0">
										{item.answer}
									</Accordion.Panel>
								</Accordion.Item>
							))}
						</Accordion>
					</SimpleGrid>
				</PageWrapper>
			</Box>

			<Box className="pb-16 md:pb-[82px]" component="section">
				<PageWrapper>
					<SimpleGrid className="grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-7">
						<Paper
							className="bg-[#F5F4F3] px-6 py-10 md:pt-5 md:pr-7 md:pb-16 md:pl-[54px]"
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
										riders and start making money delivering packages in your
										area.
									</Text>
								</Stack>
								<ArrowTop className="text-white" />
							</Flex>
						</Paper>
					</SimpleGrid>
				</PageWrapper>
			</Box>

			<Box className="pb-20 md:pb-[150px]" component="section">
				<PageWrapper>
					<DownloadApp />
				</PageWrapper>
			</Box>
		</Box>
	);
};

export default PageClient;
