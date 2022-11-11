import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [linkColor, setLinkColor] = useState("#ffffff");
	const router = useRouter();
	const [navBg, setNavBg] = useState("transparent");

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 20) {
				setNavBg("transparent");
				setLinkColor("#ffffff");
			} else {
				setLinkColor("transparent");
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, [router]);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={"fixed w-full h-20 ease-in-out duration-300 z-[100]"}
		>
			<div className="flex justify-between items-center w-full h-full px-2">
				<Link href="/">
					<Image
						src="/assets/logo.png"
						width="100"
						height="50"
						alt="/"
					/>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden md:flex"
					>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:text-[#484888] hover:-translate-y-0.5">
								{"Home"}
							</li>
						</Link>
						<Link href="/moon">
							<li className="ml-10 text-sm uppercase hover:text-[#484888] hover:-translate-y-0.5">
								{"Moon"}
							</li>
						</Link>
						<Link href="/solarsystem">
							<li className="ml-10 text-sm uppercase hover:text-[#484888] hover:-translate-y-0.5">
								{"Solar System"}
							</li>
						</Link>
						<Link href="/iotd">
							<li className="ml-10 text-sm uppercase hover:text-[#484888] hover:-translate-y-0.5">
								{"Image of the Day"}
							</li>
						</Link>
						<Link href="/references">
							<li className="ml-10 text-sm uppercase hover:text-[#484888] hover:-translate-y-0.5">
								{"References"}
							</li>
						</Link>
					</ul>
					<div
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[35%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image
									src="/assets/logo.png"
									width="60"
									height="24"
									alt="/"
								/>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%]py-4">
								What page are we looking for?
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm"
								>
									Home
								</li>
							</Link>
							<Link href="/moon">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm"
								>
									Moon
								</li>
							</Link>
							<Link href="/solarsystem">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm"
								>
									Solar System
								</li>
							</Link>
							<Link href="/iotd">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm"
								>
									Image OTD
								</li>
							</Link>
							<Link href="/references">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm"
								>
									References
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
