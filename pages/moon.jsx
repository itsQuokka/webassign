import Image from "next/image";
import React from "react";
import moonBanner from "../public/assets/Moon-Banner.jpg";
import moonGif from "../public/assets/XcFc.gif";
import Link from "next/link";

const moonPage = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={moonBanner}
					alt="/"
				/>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
				<div className="col-span-4">
					<p>Overview</p>
					<h2>The Moon</h2>
					<p className="pt-2">
						The Moon is the only natural satellite revolving around the{" "}
						<span className="text-[#484888]">
							<Link href="/solarsystem#earth">Earth. </Link>
						</span>
						The Moon is the only place besides Earth where humans have set foot.
						The rotation between the Moon and the Earth are so in sync that we
						only see one side of the Moon. Only 24 humans have travelled from
						the Earth to the Moon and of those 24, only 12 have walked on the
						surface. Man first visited the Moon in 1969 and the last time a
						person set foot on the lunar surface was in 1972. The most widely
						accepted explanation for the existence of the Moon is that it was
						created when a rock the size of Mars ran into the Earth. A full moon
						occurs when the Moon is on the opposite side of the Earth from the
						Sun and the Sun illuminates the it's face fully. Usually lunar
						craters are either named for deceased scientists, scholars, explores
						and artists OR for deceased astronauts/cosmonauts.
					</p>
					<Link href="/#main">
						<p className="pt-4 underline cursor-pointer">Back</p>
					</Link>
				</div>
				<Image
					className="absolute z-1"
					layout="fixed"
					objectFit="cover"
					src={moonGif}
					alt="/"
				/>
			</div>
		</div>
	);
};

export default moonPage;
