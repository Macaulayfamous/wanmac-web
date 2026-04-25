"use client";

import { Box, Burger, Button, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	domAnimation,
	LazyMotion,
	motion,
	useReducedMotion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonMotion, fadeDown } from "@/lib/motion";
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

const navbarThemes: Record<
	string,
	{
		backgroundClassName: string;
		logo: "dark" | "light";
		textClassName: string;
	}
> = {
	[routes.home]: {
		backgroundClassName: "bg-[#142FBB]",
		logo: "light",
		textClassName: "text-white",
	},
	[routes.contact]: {
		backgroundClassName: "bg-[#F5F8FF]",
		logo: "dark",
		textClassName: "text-[#0E1628]",
	},
};

const Navbar = () => {
	const [opened, { close, toggle }] = useDisclosure(false);
	const pathname = usePathname();
	const reduceMotion = useReducedMotion();
	const navbarTheme = navbarThemes[pathname] ?? {
		backgroundClassName: "bg-white",
		logo: "dark" as const,
		textClassName: "text-[#0E1628]",
	};
	const isLightLogo = navbarTheme.logo === "light";

	return (
		<LazyMotion features={domAnimation}>
			<>
				<Box
					className={cn(
						"flex h-[104px] items-center",
						navbarTheme.backgroundClassName,
					)}
					component="nav"
				>
					<PageWrapper className="flex items-center justify-between">
						<motion.div
							animate={reduceMotion ? undefined : "animate"}
							initial={reduceMotion ? undefined : "initial"}
							variants={fadeDown}
						>
							<Link href="/">
								<Image
									alt="wanmac logo"
									className="h-auto w-[128px] md:w-auto"
									src={isLightLogo ? transparentLogo : logo}
								/>
							</Link>
						</motion.div>
						<Group
							className={cn(
								"gap-x-9 font-normal text-lg leading-[30px]",
								navbarTheme.textClassName,
							)}
							visibleFrom="sm"
						>
							{navlinks.map((link) => (
								<Link href={link.href} key={link.name}>
									{link.name}
								</Link>
							))}
						</Group>

						<motion.div
							{...(reduceMotion ? {} : buttonMotion)}
							animate={reduceMotion ? undefined : "animate"}
							initial={reduceMotion ? undefined : "initial"}
							variants={fadeDown}
						>
							{/* <Link className="hidden sm:block" href={routes.appStore}>
								<Button
									className={cn(
										"h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px]",
										isLightLogo && "bg-white text-[#3455FF]",
									)}
								>
									Download app
								</Button>
							</Link> */}
							<Button
								className={cn(
									"hidden h-14 w-[170px] rounded-[96px] bg-[#3455FF] font-medium text-base text-white leading-[18px] opacity-90 sm:block",
									isLightLogo && "bg-white text-[#3455FF]",
								)}
								disabled
							>
								Coming soon
							</Button>
						</motion.div>

						<motion.div
							animate={reduceMotion ? undefined : "animate"}
							className="sm:hidden"
							initial={reduceMotion ? undefined : "initial"}
							variants={fadeDown}
						>
							<Burger
								aria-label="Toggle navigation"
								className="sm:hidden"
								color={isLightLogo ? "white" : "#0E1628"}
								lineSize={2}
								onClick={toggle}
								opened={opened}
								size="md"
							/>
						</motion.div>
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

						<motion.div {...(reduceMotion ? {} : buttonMotion)}>
							{/* <Link href="" onClick={close}>
								<Button className="h-14 w-full rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px]">
									Download app
								</Button>
							</Link> */}
							<Button
								className="h-14 w-full rounded-[96px] bg-white font-medium text-[#3455FF] text-base leading-[18px] opacity-90"
								disabled
							>
								Coming soon
							</Button>
						</motion.div>
					</Stack>
				</Drawer>
			</>
		</LazyMotion>
	);
};

export default Navbar;
