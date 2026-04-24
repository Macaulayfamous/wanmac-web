import { Box, Button, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import downloadImage from "@/public/download_image.png";
import { routes } from "@/utils/routes";
import AppleLogo from "./icons/apple-logo";
import GooglePlayStore from "./icons/google-play-store";

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
					<Text className="mt-3 font-normal text-lg leading-[27px] -tracking-[0.16px]">
						Take control of your deliveries anytime, anywhere.
					</Text>
					<ul className="mt-4 list-disc pl-6 text-white">
						{steps.map((step) => (
							<li
								className="font-normal text-lg leading-[27px] -tracking-[0.16px]"
								key={step}
							>
								{step}
							</li>
						))}
					</ul>
					<Group className="mt-10">
						<Link href={routes.playStore}>
							<Button
								className="h-[66px] w-full bg-white font-medium text-[#232323] text-base leading-4 -tracking-[0.16px]"
								leftSection={<GooglePlayStore />}
							>
								Download From PlayStore
							</Button>
						</Link>
						<Link href={routes.appStore}>
							<Button
								className="h-[66px] w-full border border-white bg-transparent font-normal text-base text-white leading-4 -tracking-[0.16px]"
								leftSection={<AppleLogo />}
							>
								Download From App Store
							</Button>
						</Link>
					</Group>
				</Box>
				<Image alt="download app" src={downloadImage} />
			</SimpleGrid>
		</Paper>
	);
};

export default DownloadApp;
