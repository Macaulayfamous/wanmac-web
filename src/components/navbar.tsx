"use client";

import { Box, Burger, Button, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import transparentLogo from "@/public/logo-transparent.svg";
import { cn } from "@/utils";
import { routes } from "@/utils/routes";
import PageWrapper from "./page-wrapper";

const navlinks = [
	{
		name: "Home",
		href: routes.home,
	},
	{
		name: "Contact",
		href: routes.contact,
	},
	{
		name: "FAQ",
		href: routes.faq,
	},
];

const Navbar = () => {
	const [opened, { close, toggle }] = useDisclosure(false);
	const pathname = usePathname();
	const isHomePage = pathname === routes.home;

	return (
		<>
			<Box
				className={cn("flex h-[104px] items-center bg-[#F5F8FF]", {
					"bg-[#142FBB]": isHomePage,
				})}
				component="nav"
			>
				<PageWrapper className="flex items-center justify-between">
					<Link href="/">
						<Image
							alt="wanmac logo"
							className="h-auto w-[128px] md:w-auto"
							src={isHomePage ? transparentLogo : logo}
						/>
					</Link>
					<Group
						className={cn(
							"gap-x-9 font-normal text-[#0E1628] text-lg leading-[30px]",
							{
								"text-white": isHomePage,
							},
						)}
						visibleFrom="sm"
					>
						{navlinks.map((link) => (
							<Link href={link.href} key={link.name}>
								{link.name}
							</Link>
						))}
					</Group>

					<Link className="hidden sm:block" href="">
						<Button
							className={cn(
								"h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px]",
								{
									"bg-white text-[#3455FF]": isHomePage,
								},
							)}
						>
							Download app
						</Button>
					</Link>

					<Burger
						aria-label="Toggle navigation"
						className="sm:hidden"
						color="white"
						lineSize={2}
						onClick={toggle}
						opened={opened}
						size="md"
					/>
				</PageWrapper>
			</Box>

			<Drawer
				classNames={{
					body: "px-6 py-8",
					content: "bg-[#142FBB]",
					header: "bg-[#142FBB]",
					close: "text-white",
				}}
				hiddenFrom="sm"
				onClose={close}
				opened={opened}
				padding="md"
				position="right"
				size="78%"
				withCloseButton={true}
			>
				<Stack className="gap-y-8">
					<Image
						alt="wanmac logo"
						className="h-auto w-[128px]"
						src={transparentLogo}
					/>

					<Stack className="gap-y-5 font-normal text-lg text-white leading-[30px]">
						{navlinks.map((link) => (
							<Link href={link.href} key={link.name} onClick={close}>
								{link.name}
							</Link>
						))}
					</Stack>

					<Link href="" onClick={close}>
						<Button className="h-14 w-full rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px]">
							Download app
						</Button>
					</Link>
				</Stack>
			</Drawer>
		</>
	);
};

export default Navbar;
