"use client";

import {
	Box,
	Button,
	Checkbox,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core";
import Link from "next/link";
import DownloadApp from "@/components/download-app";
import ChatIcon from "@/components/icons/chat-icon";
import SalesIcon from "@/components/icons/sales-icon";
import SupportIcon from "@/components/icons/support-icon";
import PageWrapper from "@/components/page-wrapper";
import { routes } from "@/utils/routes";

const contactCards = [
	{
		title: "Help & support",
		description:
			"Get help with bookings, rider tracking, payment issues, or delivery updates from our support team.",
		cta: "hello@wanmac.ng",
		href: "mailto:hello@wanmac.ng?subject=Hello Inquiry",
		icon: SupportIcon,
	},
	{
		title: "Sales & enquiries",
		description:
			"Talk to us about business deliveries, bulk orders, and logistics support for your brand or company.",
		cta: "sales@wanmac.ng",
		href: "mailto:sales@wanmac.ng?subject=Sales Inquiry",
		icon: SalesIcon,
	},
	{
		title: "Live chat",
		description:
			"Start a quick conversation with our team for urgent delivery questions or in-app assistance.",
		cta: "Chat with us",
		href: "https://wa.me/2348149106125",
		icon: ChatIcon,
	},
];

const ContactPageClient = () => {
	return (
		<div>
			<Box
				className="bg-[#F5F8FF] py-14 md:pt-[41px] md:pb-[74px]"
				component="section"
			>
				<PageWrapper>
					<SimpleGrid className="grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-[152px]">
						<Stack className="max-w-[464px] gap-y-4 md:mt-[117px]">
							<Text className="font-medium text-[#0E1628] text-[40px] leading-[46px] md:text-[60px] md:leading-[66px]">
								Contact us
							</Text>
							<Text className="font-normal text-[#414141] text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]">
								A reliable way to send, receive, and track deliveries in
								real-time. Built for speed, designed for convenience.
							</Text>
						</Stack>

						<Paper className="rounded-3xl border border-[#E7ECF3] bg-white px-4 py-6 shadow-[0px_4px_4px_0px_rgba(20,20,43,0.04),0px_1px_1px_0px_rgba(20,20,43,0.04)] md:px-6 md:py-8">
							<Stack className="gap-y-6">
								<SimpleGrid className="grid-cols-1 gap-4 md:grid-cols-2">
									<TextInput
										classNames={{
											input:
												"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
											label:
												"mb-2 font-medium text-base leading-6 text-[#344054]",
										}}
										label="First name"
										placeholder="First name"
									/>
									<TextInput
										classNames={{
											input:
												"h-[44px] rounded-[8px] border-[#D5DDE8] text-base text-[#0E1628]",
											label:
												"mb-2 font-medium text-base leading-6 text-[#344054]",
										}}
										label="Last name"
										placeholder="Last name"
									/>
								</SimpleGrid>

								<TextInput
									classNames={{
										input:
											"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
										label:
											"mb-2 font-medium text-base leading-6 text-[#344054]",
									}}
									label="Email"
									placeholder="you@company.com"
									type="email"
								/>

								<TextInput
									classNames={{
										input:
											"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
										label:
											"mb-2 font-medium text-base leading-6 text-[#344054]",
									}}
									label="Phone number"
									placeholder="+234 814 910 6125"
									type="tel"
								/>

								<Textarea
									classNames={{
										input:
											"h-[134px] rounded-[8px] border-[#D5DDE8] px-4 py-3 text-sm text-[#0E1628] md:text-base",
										label:
											"mb-2 font-medium text-base leading-6 text-[#344054]",
									}}
									label="Message"
									minRows={6}
									placeholder="Leave us a message..."
								/>

								<Checkbox
									classNames={{
										body: "items-center",
										input: "rounded-md border-[#D0D5DD]",
										label:
											"text-sm leading-6 text-[#667085] md:text-base md:leading-7",
									}}
									label={
										<>
											You agree to our friendly{" "}
											<Link className="underline" href={routes.privacy}>
												privacy policy
											</Link>
											.
										</>
									}
								/>

								<Button className="mt-2 h-14 rounded-[999px] bg-[#3455FF] font-medium text-base text-white leading-5 md:h-[60px] md:text-lg">
									Send message
								</Button>
							</Stack>
						</Paper>
					</SimpleGrid>
				</PageWrapper>
			</Box>
			<Box className="py-16 md:py-24" component="section">
				<PageWrapper>
					<Stack className="gap-y-10">
						<Stack className="text-center" gap={1}>
							<Text className="font-medium text-[#0E1628] text-[34px] leading-[42px] md:text-[44px] md:leading-[54px]">
								Reach us out directly
							</Text>
							<Text className="mx-auto max-w-[620px] font-normal text-[#666E82] text-base leading-7 md:text-lg md:leading-[30px]">
								Whether you need delivery support, business logistics help, or a
								quick answer about the app, our team is ready to assist.
							</Text>
						</Stack>

						<SimpleGrid className="grid-cols-1 gap-6 md:grid-cols-3">
							{contactCards.map((card) => (
								<Paper
									className="rounded-[28px] border border-[#F3F4F7] px-[50px] py-14 text-center shadow-[0_10px_30px_rgba(8,8,8,0.06)]"
									key={card.title}
									radius={28}
								>
									<Stack className="h-full items-center justify-between gap-y-6">
										<Stack className="flex-1 items-center gap-y-6">
											<card.icon />
											<Stack className="gap-y-[7px]">
												<Text className="font-medium text-2xl text-[#0E1628]">
													{card.title}
												</Text>
												<Text className="font-normal text-[#666E82] text-lg leading-[30px]">
													{card.description}
												</Text>
											</Stack>
										</Stack>

										<Link href={card.href}>
											<Text className="font-medium text-[#0E1628] text-lg leading-5">
												{card.cta}{" "}
												<Text className="ml-2" inherit span>
													↗
												</Text>
											</Text>
										</Link>
									</Stack>
								</Paper>
							))}
						</SimpleGrid>
					</Stack>
				</PageWrapper>
			</Box>
			<Box className="mb-[70px]" component="section">
				<PageWrapper>
					<DownloadApp />
				</PageWrapper>
			</Box>
		</div>
	);
};

export default ContactPageClient;
