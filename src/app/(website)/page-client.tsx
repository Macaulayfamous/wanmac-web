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
import Image from "next/image";
import Link from "next/link";
import DownloadApp from "@/components/download-app";
import ArrowTop from "@/components/icons/arrow-top";
import VehicleApproved from "@/components/icons/vehicle-approved";
import PageWrapper from "@/components/page-wrapper";
import analytics from "@/public/analytics.png";
import deliveryMan from "@/public/delivery-man.png";
import hero from "@/public/hero.png";
import mockup from "@/public/mockup.png";
import { routes } from "@/utils/routes";
import { stats } from "./extras";

const PageClient = () => {
	return (
		<Box component="main">
			<Box className="bg-[#142FBB] pt-[91px]" component="header">
				<PageWrapper>
					<SimpleGrid className="grid-cols-2 items-center">
						<Stack className="gap-y-[53px]">
							<Stack className="gap-y-4">
								<Text className="font-medium text-[60px] text-white leading-[66px] -tracking-[0.16px]">
									Move Smarter. Deliver{" "}
									<Text className="block" inherit span>
										Faster.
									</Text>
								</Text>
								<Text className="font-normal text-[#DFE2EB] text-lg leading-[27px] -tracking-[0.16px]">
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
						<Image alt="hero" src={hero} />
					</SimpleGrid>
				</PageWrapper>
			</Box>
			<Box className="pt-[158px] pb-[62px]" component="section">
				<PageWrapper>
					<SimpleGrid className="grid-cols-2 items-center gap-x-[54px]">
						<Image alt="mockup" src={mockup} />
						<Stack gap={15}>
							<Text className="font-medium text-[#0E1628] text-[44px] leading-[59px]">
								Our platform connects customers, riders, and businesses.
							</Text>
							<Text className="font-normal text-[#666E82] text-lg leading-[30px]">
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
					<Paper className="bg-[#080808] px-[69px] py-24" radius={24}>
						<Stack className="gap-y-16">
							<SimpleGrid className="grid-cols-2">
								<Text className="font-medium text-[44px] text-white leading-[54px]">
									Our numbers talking{" "}
									<Text className="block" inherit span>
										by themselves
									</Text>
								</Text>
								<Text className="max-w-[452px] font-normal text-[#BFC6D6] text-lg leading-[30px]">
									Lorem ipsum dolor sit amet consectetur vitae aenean amet in
									eros neque nulla mattis sit id quis dolor ut velit placerat
									sit dictum amet.
								</Text>
							</SimpleGrid>
							<Group className="justify-between">
								{stats.map((item, index) => (
									<Box className="text-white" key={`stats-${index}`}>
										<Text className="font-medium text-[72px] leading-[80px]">
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
							</Group>
						</Stack>
					</Paper>
				</PageWrapper>
			</Box>

			<Box className="pb-24" component="section">
				<PageWrapper>
					<Stack className="gap-y-12">
						<Title className="max-w-[680px] font-medium text-[#0E1628] text-[44px] leading-[54px]">
							How It Works - Our simple yet powerful process
						</Title>
						<SimpleGrid className="grid-cols-2">
							<Box></Box>
							<Image alt="delivery man" src={deliveryMan} />
						</SimpleGrid>
					</Stack>
				</PageWrapper>
			</Box>

			<Box className="pb-[82px]" component="section">
				<PageWrapper>
					<SimpleGrid className="grid-cols-2 gap-x-7">
						<Paper
							className="bg-[#F5F4F3] pt-5 pr-7 pb-16 pl-[54px]"
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
										<Text className="font-normal text-[#666E82] text-lg leading-[30px]">
											Power your business with reliable delivery. We help <br />{" "}
											businesses scale with fast, efficient, and trackable
											logistics solutions.
										</Text>
									</Stack>
								</Flex>
							</Stack>
						</Paper>

						<Paper className="bg-[#0E1628] px-[38px] py-[72px]" radius={24}>
							<Flex className="gap-x-4">
								<VehicleApproved />
								<Stack className="flex-1" gap={7}>
									<Text className="font-medium text-2xl text-white">
										Become a Rider
									</Text>
									<Text className="font-normal text-[#BFC6D6] text-lg leading-[27px]">
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

			<Box className="pb-[96px]" component="section">
				<PageWrapper>
					<SimpleGrid className="grid-cols-2">
						<Stack className="gap-y-10">
							<Stack className="gap-y-[18px]">
								<Title className="font-medium text-[#232323] text-[56px] leading-[62px] -tracking-[0.16px]">
									Frequently asked questions
								</Title>
							</Stack>
							<Link href={routes.contact}>
								<Button className="h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px]">
									Contact Us
								</Button>
							</Link>
						</Stack>
					</SimpleGrid>
				</PageWrapper>
			</Box>

			<Box className="pb-[150px]" component="section">
				<PageWrapper>
					<DownloadApp />
				</PageWrapper>
			</Box>
		</Box>
	);
};

export default PageClient;
