import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [navBg, setNavBg] = useState("transparent");
	const [linkColor, setLinkColor] = useState("#ffffff");
	const router = useRouter();

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 90) {
				setNavBg("#ffffff");
				setLinkColor("#484888");
			} else {
				setNavBg("transparent");
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
					</ul>
					<div
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
