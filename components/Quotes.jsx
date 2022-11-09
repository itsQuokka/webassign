import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
	return (
		<div
			id="quotes"
			className="w-full md:h-screen p-2 flex items-center"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 pt-[10px]">
				<div className="col-span-1">
					<div></div>
					<p className="uppercase text-xl tracking-widest text-gray-400 mt-[80px] font-bold">
						Cool
					</p>
					<h2 className="py-2 text-[#484888]">Some Quotes About Space</h2>
					<div className="ml-4 pt-4">
						<QuoteItem
							quote="That's one small step for a man, one giant leap for mankind."
							author="Neil Armstrong"
						/>
						<QuoteItem
							quote="Space is for everybody. It’s not just for a few people in science
							or math, or for a select group of astronauts. That’s our new
							frontier out there, and it’s everybody’s business to know about
							space."
							author="Christa McAuliffe"
						/>
						<QuoteItem
							quote="NASA's next urgent mission should be to send good poets into
							space so they can describe what it's really like."
							author="Shannon Hale"
						/>
						<QuoteItem
							quote="Astronauts are inherently insane. And really noble."
							author="Andy Weir"
						/>
						<QuoteItem
							quote="Once you can accept the universe as matter expanding into nothing
							that is something, wearing stripes with plaid comes easy."
							author="Albert Einstein"
						/>
						<QuoteItem
							quote="No one ever accomplished anything great sitting down."
							author="Chris Hadfield"
						/>
						<p className="text-left text-sm pt-4">
							<span className="text-gray-400 hover:text-[#484888] hover:cursor-pointer">
								<Link
									href={
										"https://www.asc-csa.gc.ca/eng/history-of-canada-in-space.asp"
									}
								>
									Click here to find out more about the history of Canada in
									space
								</Link>
							</span>
							<span className="text-gray-400">
								, or reach out to us by email at{" "}
							</span>
							<span className="text-gray-400 hover:text-[#484888]">
								<a href="mailto: canadaspace@uwo.ca">canadaspace@uwo.ca</a>
							</span>
						</p>
					</div>
					<div className="flex mt-10 pr-10 pl-4 p-0.5 mx[-180px] h-10">
						<div className="m-[1.1rem] w-[300px] mx-[-180px] p-0.5 bg-[#484888] "></div>
						<div className="w-[310px] bg-[#484888] shadow-lg"></div>
					</div>
				</div>
				<div className="col-span-1 flex pl-6 drop-shadow-md scale-[75%]">
					<Image
						className="rounded-xl "
						src="/assets/astro.png"
						width="750px"
						height="500px"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Quotes;
