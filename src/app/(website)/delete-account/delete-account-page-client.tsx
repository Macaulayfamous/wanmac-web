"use client";
import {
	Box,
	Button,
	Checkbox,
	Group,
	Notification,
	Paper,
	Stack,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { useState } from "react";
import WrappedAlertTriangleIcon from "@/components/icons/wrapped-alert-triangle-icon";
import PageWrapper from "@/components/page-wrapper";

const DeleteAccountPageClient = () => {
	const [confirmed, setConfirmed] = useState(false);
	const [email, setEmail] = useState("");
	const [reason, setReason] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!(confirmed && email)) {
			return;
		}

		setIsSubmitting(true);
		setSubmitted(false);

		window.setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
		}, 900);
	};
	return (
		<Box className="mb-10 border-[#0000001A] border-b pb-14 sm:pb-16 lg:pb-20">
			<PageWrapper className="pt-8 sm:pt-12 lg:pt-[58px]">
				<Stack className="gap-y-8 sm:gap-y-10">
					<Paper
						className="border border-[#FECACA] bg-[#FFF4F4] p-5 sm:p-6"
						radius={24}
					>
						<Group className="items-start gap-4">
							<WrappedAlertTriangleIcon className="h-12 w-12 shrink-0 rounded-full [&>path:first-child]:fill-[#DE3C35]" />
							<Stack className="flex-1 gap-y-3">
								<Title className="font-bold text-[#0A0A0A] text-xl leading-6 -tracking-[0.03em]">
									Before You Delete Your Account
								</Title>
								<Text className="font-normal text-[#5C5C5C] text-base leading-[22px] -tracking-[0.7px]">
									Please understand that deleting your account is permanent and
									irreversible. Read the information below carefully.
								</Text>
							</Stack>
						</Group>
					</Paper>

					<Paper className="bg-[#F9FAFB] p-5 sm:p-[30px]" radius={24}>
						<Stack className="gap-y-5">
							<Title className="font-bold text-2xl text-[#0A0A0A] leading-[29px] -tracking-[0.03em]">
								Consider These Alternatives
							</Title>
							<Stack className="gap-y-5 font-normal text-[#5C5C5C] text-base leading-[22px] -tracking-[0.7px]">
								<Text inherit>
									Instead of deleting your account, you might want to:
								</Text>
								<Box
									className="list-disc space-y-2 pl-5 marker:text-dark2"
									component="ul"
								>
									<Text component="li" inherit>
										Temporarily disable your account
									</Text>
									<Text component="li" inherit>
										Contact support to address any concerns
									</Text>
								</Box>
							</Stack>
						</Stack>
					</Paper>

					<Paper
						className="border border-[#0000001A] bg-white p-5 sm:p-[30px]"
						radius={24}
					>
						<Stack className="gap-y-6">
							<Text className="font-bold text-2xl text-[#0A0A0A] leading-[29px] -tracking-[0.03em]">
								Proceed with Deletion
							</Text>
							{submitted ? (
								<Notification
									className="border border-[#BBF7D0] bg-[#F0FDF4]"
									color="green"
									onClose={() => setSubmitted(false)}
									title="Deletion request received"
								>
									<Text className="font-normal text-[#166534] text-sm leading-5">
										We have received your request for {email}.
									</Text>
								</Notification>
							) : null}
							<Box component="form" onSubmit={handleSubmit}>
								<Stack className="gap-y-6">
									<Stack gap={8}>
										<TextInput
											classNames={{
												input:
													"h-[50px] rounded-[25px] border-[0.5px] border-[#91919199] bg-[#F7FAFF] px-5 text-base sm:px-6",
												label:
													"mb-2 font-semibold text-sm text-[#0A0A0A] leading-[18px] -tracking-[0.7px]",
											}}
											// description="Enter the email associated with your account"
											label="Email Address"
											onChange={(event) => setEmail(event.currentTarget.value)}
											placeholder="john.doe@example.com"
											required
											type="email"
											value={email}
										/>
										<Text className="font-normal text-[#6B7280] text-xs leading-[15px] -tracking-[0.6px]">
											Enter the email associated with your account
										</Text>
									</Stack>
									<Textarea
										classNames={{
											input:
												"min-h-[150px] rounded-[25px] border border-[#D7DDE8] bg-[#F7FAFF] px-5 pt-5 text-base sm:min-h-[168px] sm:px-6",
											label:
												"mb-2 font-semibold text-sm text-[#0A0A0A] leading-[18px] -tracking-[0.7px]",
										}}
										label="Why are you leaving? (Optional)"
										onChange={(event) => setReason(event.currentTarget.value)}
										placeholder="Your feedback helps us improve..."
										value={reason}
									/>
									<Checkbox
										checked={confirmed}
										classNames={{
											label:
												"font-normal text-sm text-[#5C5C5C] leading-5 -tracking-[0.5px]",
										}}
										label="I understand that deleting my account is permanent and cannot be undone. All my data will be permanently deleted."
										onChange={(event) =>
											setConfirmed(event.currentTarget.checked)
										}
									/>
									<Button
										className="h-[60px] rounded-[30px] bg-[#DE3C35] font-semibold text-base text-white leading-[22px] disabled:bg-[#FBE1E1] disabled:text-white"
										disabled={!(confirmed && email) || isSubmitting}
										loading={isSubmitting}
										type="submit"
									>
										Delete Account
									</Button>
								</Stack>
							</Box>
						</Stack>
					</Paper>
				</Stack>
			</PageWrapper>
		</Box>
	);
};

export default DeleteAccountPageClient;
