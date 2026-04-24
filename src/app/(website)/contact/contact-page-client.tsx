import { Box, Stack, Text } from "@mantine/core";
import DownloadApp from "@/components/download-app";
import PageWrapper from "@/components/page-wrapper";

const ContactPageClient = () => {
	return (
		<div>
			<Box className="py-24" component="section">
				<PageWrapper>
					<Stack className="gap-y-10">
						<Stack className="text-center" gap={1}>
							<Text className="font-medium text-[#0E1628] text-[44px] leading-[54px]">
								Reach us out directly
							</Text>
							<Text className="mx-auto max-w-[452px] font-normal text-[#666E82] text-lg leading-[30px]">
								Lorem ipsum dolor sit amet consectetur vitae aenean amet in eros
								neque nulla mattis sit id quis dolor ut.
							</Text>
						</Stack>
					</Stack>
				</PageWrapper>
			</Box>
			<Box component="section">
				<PageWrapper>
					<DownloadApp />
				</PageWrapper>
			</Box>
		</div>
	);
};

export default ContactPageClient;
