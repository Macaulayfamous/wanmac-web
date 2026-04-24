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
		<Paper
			className="bg-[#142FBB] px-6 pt-12 md:pt-24 md:pr-[38px] md:pl-[68px]"
			radius={15}
		>
			<SimpleGrid className="grid-cols-1 gap-10 text-white md:grid-cols-2 md:items-center">
				<Box>
					<Text className="font-medium text-[36px] leading-[42px] -tracking-[0.16px] md:text-[56px] md:leading-[62px]">
						Download App
					</Text>
					<Text className="mt-3 font-normal text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]">
						Take control of your deliveries anytime, anywhere.
					</Text>
					<ul className="mt-4 list-disc pl-6 text-white">
						{steps.map((step) => (
							<li
								className="font-normal text-base leading-7 -tracking-[0.16px] md:text-lg md:leading-[27px]"
								key={step}
							>
								{step}
							</li>
						))}
					</ul>
					<Group className="mt-8 flex-col gap-4 md:mt-10 md:flex-row">
						<Link className="w-full md:w-auto" href={routes.playStore}>
							<Button
								className="h-14 w-full bg-white px-4 font-medium text-[#232323] text-sm leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
								leftSection={<GooglePlayStore />}
							>
								Download From PlayStore
							</Button>
						</Link>
						<Link className="w-full md:w-auto" href={routes.appStore}>
							<Button
								className="h-14 w-full border border-white bg-transparent px-4 font-normal text-sm text-white leading-4 -tracking-[0.16px] md:h-[66px] md:text-base"
								leftSection={<AppleLogo />}
							>
								Download From App Store
							</Button>
						</Link>
					</Group>
				</Box>
				<Image
					alt="download app"
					className="h-auto w-full max-w-[480px] self-end justify-self-center md:max-w-none"
					src={downloadImage}
				/>
			</SimpleGrid>
		</Paper>
	);
};

export default DownloadApp;
