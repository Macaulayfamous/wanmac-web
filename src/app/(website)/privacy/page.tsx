import { Box, List, ListItem, Stack, Text, Title } from "@mantine/core";
import PageWrapper from "@/components/page-wrapper";

export const metadata = {
	title: "Privacy Policy",
};

const sections = [
	{
		title: "What information do we collect?",
		paragraphs: [
			"Wanmac collects the information needed to create your account and complete deliveries through the mobile app. This may include your name, email address, phone number, pickup and drop-off addresses, order details, and any delivery instructions you choose to share.",
			"When you use location-enabled features, we may receive precise or approximate device location to help you book deliveries, track riders in real time, estimate arrival times, and improve route accuracy. We may also collect device details, app usage data, and log information such as IP address, browser type, crash reports, and interaction history.",
			"If you make payments through the app, billing and transaction details may be processed by our payment partners. Wanmac does not store full payment card details on its own servers unless clearly stated as part of a secure payment workflow.",
		],
	},
	{
		title: "How do we use your information?",
		paragraphs: [
			"We use your information to provide and improve the Wanmac delivery service. This includes creating your account, confirming bookings, assigning riders, tracking deliveries, sending status updates, processing payments, handling refunds, and responding to customer support requests.",
			"Your information may also be used to personalize your app experience, prevent fraud, maintain platform safety, monitor performance, and comply with legal obligations. Where permitted, we may send service messages, promotional offers, feature updates, and important policy notices.",
			"We only use personal data where we have a valid business reason or legal basis to do so, and we aim to limit collection to what is relevant for operating a secure and reliable delivery platform.",
		],
	},
	{
		title: "Do we use cookies and other tracking technologies?",
		paragraphs: [
			"Yes. Wanmac may use cookies, mobile SDKs, pixels, and similar technologies to keep you signed in, remember preferences, measure app performance, and understand how users interact with our website and mobile app.",
			"These technologies help us improve reliability, analyze traffic, troubleshoot issues, prevent abuse, and deliver more relevant communications. You can manage some tracking preferences through your device settings or browser controls, although disabling certain tools may affect how parts of the service work.",
		],
	},
	{
		title: "How long do we keep your information?",
		paragraphs: [
			"We retain personal information only for as long as it is needed to provide the service, meet legal and tax requirements, resolve disputes, enforce our terms, and keep appropriate business records.",
			"Retention periods may vary depending on the type of data involved. For example, delivery history, support records, and transaction records may be kept longer than temporary analytics logs where there is a legitimate operational or legal reason to do so.",
		],
	},
	{
		title: "How do we keep your information safe?",
		paragraphs: [
			"We use administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, misuse, loss, or disclosure. These measures may include access controls, encrypted connections, secure infrastructure, monitoring tools, and limited internal access based on role.",
			"No platform can guarantee absolute security, but we review our processes regularly and work with trusted service providers to maintain reasonable protections for user data.",
		],
	},
	{
		title: "What are your privacy rights?",
		paragraphs: [
			"Depending on your location, you may have rights to access, correct, update, delete, or object to certain uses of your personal information. You may also have the right to withdraw consent for optional marketing communications at any time.",
			"You can update some account details directly in the app. For other requests, contact our team and we will review your request in line with applicable law and operational requirements.",
		],
	},
	{
		title: "How can you contact us about this policy?",
		paragraphs: [
			"If you have questions about this Privacy Policy or how Wanmac handles personal information, contact our support team through the app or by using the contact details provided on our website. We will review your request and respond as soon as reasonably possible.",
		],
		listItems: [
			"Questions about account information, delivery history, or updates to your profile can be submitted through customer support.",
			"Requests related to privacy, data access, or deletion should include enough detail for us to verify and process the request securely.",
			"If this policy changes materially, we may notify you through the app, by email, or by posting the updated version on our website.",
		],
	},
];

const PrivacyPage = () => {
	return (
		<Box className="py-24" component="section">
			<PageWrapper>
				<Stack className="mx-auto max-w-[760px] gap-y-14">
					<Stack className="text-center" gap={10}>
						<Title
							className="font-medium text-[#0E1628] text-[44px] leading-[54px]"
							order={1}
						>
							Privacy Policy
						</Title>
						<Text className="mx-auto max-w-[660px] font-normal text-[#666E82] text-base leading-[26px]">
							Your privacy matters to Wanmac. This Privacy Policy explains how
							we collect, use, store, and protect information when you use our
							delivery mobile app, website, and related services.
						</Text>
					</Stack>

					<Stack className="gap-y-8">
						<Text className="font-normal text-[#666E82] text-base leading-[28px]">
							Wanmac is built to make booking, tracking, and receiving
							deliveries simple and reliable. To provide that service, we need
							limited information about our customers, their orders, and how the
							app is used. We are committed to handling that information
							responsibly and with appropriate care.
						</Text>
						<Text className="font-normal text-[#666E82] text-base leading-[28px]">
							This page describes what information we collect, why we collect
							it, how long we keep it, and the choices available to you. By
							using Wanmac, you agree to the practices described in this policy,
							subject to any rights you may have under applicable law.
						</Text>
					</Stack>

					<Stack className="gap-y-10">
						{sections.map((section) => (
							<Stack className="gap-y-5" key={section.title}>
								<Title
									className="font-medium text-[#0E1628] text-[20px] leading-[32px]"
									order={2}
								>
									{section.title}
								</Title>

								<Stack className="gap-y-4">
									{section.paragraphs.map((paragraph) => (
										<Text
											className="font-normal text-[#666E82] text-base leading-[28px]"
											key={paragraph}
										>
											{paragraph}
										</Text>
									))}
								</Stack>

								{section.listItems ? (
									<List className="pl-5 text-[#666E82]" spacing="sm">
										{section.listItems.map((item) => (
											<ListItem
												className="font-normal text-base leading-[28px]"
												key={item}
											>
												{item}
											</ListItem>
										))}
									</List>
								) : null}
							</Stack>
						))}
					</Stack>
				</Stack>
			</PageWrapper>
		</Box>
	);
};

export default PrivacyPage;
