import { Box, List, ListItem, Paper, SimpleGrid, Text } from "@mantine/core";

const steps = [
	"Fast booking in a few taps",
	"Real-time tracking",
	"Secure payments",
	"Delivery history at your fingertips",
];

const DownloadApp = () => {
	return (
		<Paper className="bg-[#142FBB] pt-24 pr-[38px] pl-[68px]" radius={15}>
			<SimpleGrid className="grid-cols-2 text-white">
				<Box>
					<Text className="font-medium text-[56px] leading-[62px] -tracking-[0.16px]">
						Download App
					</Text>
					<Text className="font-normal text-lg leading-[27px] -tracking-[0.16px]">
						Take control of your deliveries anytime, anywhere.
					</Text>
					<List className="text-white" type="unordered">
						{steps.map((step) => (
							<ListItem
								className="font-normal text-lg leading-[27px] -tracking-[0.16px]"
								key={step}
							>
								{step}
							</ListItem>
						))}
					</List>
				</Box>
			</SimpleGrid>
		</Paper>
	);
};

export default DownloadApp;
