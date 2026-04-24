import { Box, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { routes } from "@/utils/routes";
import AppleLogo from "./icons/apple-logo";
import FacebookIcon from "./icons/facebook-icon";
import GooglePlayStore from "./icons/google-play-store";
import InstagramIcon from "./icons/instagram-icon";
import PageWrapper from "./page-wrapper";

export const socialLinks = [
	{
		icon: FacebookIcon,
		href: routes.facebook,
	},
	{
		icon: InstagramIcon,
		href: routes.instagram,
	},
];

export const footerLinks = [
	{
		title: "Home",
		href: routes.home,
	},
	{
		title: "About Us",
		href: routes.about,
	},
	{
		title: "Contact Us",
		href: routes.contact,
	},
	{
		title: "FAQ",
		href: routes.faq,
	},
];

const Footer = () => {
	return (
		<Box className="px-10 pb-[41px]" component="footer">
			<PageWrapper>
				<Stack className="gap-y-[50px]">
					<Stack className="gap-y-[30px] pr-[65px] pb-[69px]">
						<Group className="justify-between">
							<Image alt="wanmac logo" src={logo} />
							<Group className="gap-x-[75px]">
								{footerLinks.map((item, index) => (
									<Link href={item.href} key={`footer-link-${index}`}>
										<Text className="font-normal text-[#232323] text-lg leading-[23px]">
											{item.title}
										</Text>
									</Link>
								))}
							</Group>
						</Group>

						<Group className="gap-x-6">
							<Link href={routes.appStore}>
								<Group className="h-10 w-[135px] gap-x-1.5 rounded-[7px] border border-[#A6A6A6] bg-[#101010] pl-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
									<AppleLogo />
									<Stack className="text-white" gap={0}>
										<Text className="font-normal text-[8px]">
											Download on the
										</Text>
										<Text className="font-medium text-sm">App Store</Text>
									</Stack>
								</Group>
							</Link>

							<Link href={routes.playStore}>
								<Group className="h-10 w-[135px] gap-x-1.5 rounded-[7px] border border-[#A6A6A6] bg-[#101010] pl-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
									<GooglePlayStore />
									<Stack className="text-white" gap={0}>
										<Text className="font-normal text-[8px] uppercase">
											Get it on
										</Text>
										<Text className="font-medium text-sm">Google Play</Text>
									</Stack>
								</Group>
							</Link>
						</Group>
					</Stack>

					<Group className="justify-between">
						<Group>
							<Text className="font-normal text-[#636362] text-lg leading-[27px] -tracking-[0.16px]">
								Copyright © Wanmac |{" "}
								<Link href={routes.privacy}>
									Privacy Policy - Terms & condidtions
								</Link>
							</Text>
						</Group>

						<Group>
							{socialLinks.map((item, index) => (
								<Link href={item.href} key={`social-link-${index}`}>
									<item.icon />
								</Link>
							))}
						</Group>
					</Group>
				</Stack>
			</PageWrapper>
		</Box>
	);
};

export default Footer;
