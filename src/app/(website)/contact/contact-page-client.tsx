"use client";

import emailjs from "@emailjs/browser";
import {
	Alert,
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
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import DownloadApp from "@/components/download-app";
import ChatIcon from "@/components/icons/chat-icon";
import SalesIcon from "@/components/icons/sales-icon";
import SupportIcon from "@/components/icons/support-icon";
import PageWrapper from "@/components/page-wrapper";
import { env } from "@/env";
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

type FormValues = {
	agreeToPrivacy: boolean;
	email: string;
	firstName: string;
	lastName: string;
	message: string;
	phoneNumber: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
	agreeToPrivacy: false,
	email: "",
	firstName: "",
	lastName: "",
	message: "",
	phoneNumber: "",
};

const ContactPageClient = () => {
	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitState, setSubmitState] = useState<{
		message: string;
		type: "error" | "success";
	} | null>(null);

	const setFieldValue = <K extends keyof FormValues>(
		field: K,
		value: FormValues[K],
	) => {
		setValues((current) => ({ ...current, [field]: value }));
		setErrors((current) => ({ ...current, [field]: undefined }));
	};

	const validateForm = () => {
		const nextErrors: FormErrors = {};

		if (!values.firstName.trim()) {
			nextErrors.firstName = "First name is required";
		}

		if (!values.lastName.trim()) {
			nextErrors.lastName = "Last name is required";
		}

		if (!values.email.trim()) {
			nextErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
			nextErrors.email = "Enter a valid email address";
		}

		if (!values.phoneNumber.trim()) {
			nextErrors.phoneNumber = "Phone number is required";
		}

		if (!values.message.trim()) {
			nextErrors.message = "Message is required";
		}

		if (!values.agreeToPrivacy) {
			nextErrors.agreeToPrivacy = "You must agree to the privacy policy";
		}

		setErrors(nextErrors);

		return Object.keys(nextErrors).length === 0;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitState(null);

		if (!validateForm()) {
			return;
		}

		const serviceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const publicKey = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setSubmitState({
				message:
					"Email service is not configured yet. Add the EmailJS public environment variables to enable submissions.",
				type: "error",
			});
			return;
		}

		try {
			setIsSubmitting(true);

			await emailjs.send(
				serviceId,
				templateId,
				{
					email: values.email,
					first_name: values.firstName,
					full_name: `${values.firstName} ${values.lastName}`.trim(),
					last_name: values.lastName,
					message: values.message,
					phone: `+${values.phoneNumber}`,
					title: "Wanmac Contact Form",
				},
				{ publicKey },
			);

			setSubmitState({
				message:
					"Your message has been sent successfully. We’ll get back to you soon.",
				type: "success",
			});
			setValues(initialValues);
			setErrors({});
		} catch {
			setSubmitState({
				message:
					"We couldn’t send your message right now. Please try again shortly.",
				type: "error",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<Box
				className="bg-[#F5F8FF] py-14 md:pt-[41px] md:pb-[74px]"
				component="header"
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
							<Box component="form" onSubmit={handleSubmit}>
								<Stack className="gap-y-6">
									<SimpleGrid className="grid-cols-1 gap-4 md:grid-cols-2">
										<TextInput
											classNames={{
												input:
													"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
												label:
													"mb-2 font-medium text-base leading-6 text-[#344054]",
											}}
											error={errors.firstName}
											label="First name"
											onChange={(event) =>
												setFieldValue("firstName", event.currentTarget.value)
											}
											placeholder="First name"
											value={values.firstName}
										/>
										<TextInput
											classNames={{
												input:
													"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
												label:
													"mb-2 font-medium text-base leading-6 text-[#344054]",
											}}
											error={errors.lastName}
											label="Last name"
											onChange={(event) =>
												setFieldValue("lastName", event.currentTarget.value)
											}
											placeholder="Last name"
											value={values.lastName}
										/>
									</SimpleGrid>

									<TextInput
										classNames={{
											input:
												"h-[44px] rounded-[8px] border-[#D5DDE8] text-sm text-[#0E1628] md:text-base",
											label:
												"mb-2 font-medium text-base leading-6 text-[#344054]",
										}}
										error={errors.email}
										label="Email"
										onChange={(event) =>
											setFieldValue("email", event.currentTarget.value)
										}
										placeholder="you@company.com"
										type="email"
										value={values.email}
									/>

									<Stack gap={8}>
										<Text className="font-medium text-[#344054] text-base leading-6">
											Phone number
										</Text>
										<PhoneInput
											buttonClass={errors.phoneNumber ? "!border-red-500" : ""}
											containerClass="phone-input-container"
											country="ng"
											enableSearch
											inputClass={errors.phoneNumber ? "!border-red-500" : ""}
											onChange={(value) => setFieldValue("phoneNumber", value)}
											placeholder="+234 814 910 6125"
											value={values.phoneNumber}
										/>
										{errors.phoneNumber ? (
											<Text className="text-red-600 text-sm leading-5">
												{errors.phoneNumber}
											</Text>
										) : null}
									</Stack>

									<Textarea
										classNames={{
											input:
												"h-[134px] rounded-[8px] border-[#D5DDE8] px-4 py-3 text-sm text-[#0E1628] md:text-base",
											label:
												"mb-2 font-medium text-base leading-6 text-[#344054]",
										}}
										error={errors.message}
										label="Message"
										minRows={6}
										onChange={(event) =>
											setFieldValue("message", event.currentTarget.value)
										}
										placeholder="Leave us a message..."
										value={values.message}
									/>

									<Checkbox
										checked={values.agreeToPrivacy}
										classNames={{
											body: "items-center",
											input: "rounded-md border-[#D0D5DD]",
											label:
												"text-sm leading-6 text-[#667085] md:text-base md:leading-7",
										}}
										error={errors.agreeToPrivacy}
										label={
											<>
												You agree to our friendly{" "}
												<Link className="underline" href={routes.privacy}>
													privacy policy
												</Link>
												.
											</>
										}
										onChange={(event) =>
											setFieldValue(
												"agreeToPrivacy",
												event.currentTarget.checked,
											)
										}
									/>

									{submitState ? (
										<Alert
											color={submitState.type === "success" ? "green" : "red"}
											icon={
												submitState.type === "success" ? (
													<CheckCircle2 size={18} />
												) : (
													<AlertCircle size={18} />
												)
											}
											radius="md"
										>
											{submitState.message}
										</Alert>
									) : null}

									<Button
										className="mt-2 h-14 rounded-[999px] bg-[#3455FF] font-medium text-base text-white leading-5 md:h-[60px] md:text-lg"
										loading={isSubmitting}
										type="submit"
									>
										Send message
									</Button>
								</Stack>
							</Box>
						</Paper>
					</SimpleGrid>
				</PageWrapper>
			</Box>
			<Box className="bg-white py-16 md:py-24" component="section">
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
			<Box className="bg-white pb-[70px]" component="section">
				<PageWrapper>
					<DownloadApp />
				</PageWrapper>
			</Box>
		</div>
	);
};

export default ContactPageClient;
