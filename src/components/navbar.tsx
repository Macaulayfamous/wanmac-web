import { Box, Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import transparentLogo from "@/public/logo-transparent.svg";
import PageWrapper from "./page-wrapper";

const navlinks = [
	{
		name: "Home",
		href: "/",
	},

	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "FAQ",
		href: "/",
	},
];

const Navbar = () => {
	return (
		<Box className="flex h-[104px] items-center bg-[#142FBB]" component="nav">
			<PageWrapper className="flex justify-between">
				<Link href="/">
					<Image alt="wanmac logo" src={transparentLogo} />
				</Link>

				<Group className="gap-x-9 font-normal text-lg text-white leading-[30px]">
					{navlinks.map((link) => (
						<Link href={link.href} key={link.name}>
							{link.name}
						</Link>
					))}
				</Group>

				<Link href="">
					<Button className="h-14 w-[170px] rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px]">
						Download app
					</Button>
				</Link>
			</PageWrapper>
		</Box>
	);
};

export default Navbar;
