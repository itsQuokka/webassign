import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/banner_iotd.jpg";
import Link from "next/link";
import QuoteItem from "../components/QuoteItem";

const iotd = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={propertyImg}
					alt="/"
				/>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 my-8">
				<div className="col-span-4">
					<p>Overview</p>
					<h2>Image of the Day</h2>

					<p className="pt-2">
						Nasa posts an "Image of the Day" page every day. Here are 3 of my
						favourite images:
					</p>

					<div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-3 pt-8">
						<div class="w-full rounded hover:-translate-y-1 hover:cursor-pointer">
							<Link
								href="https://www.nasa.gov/image-feature/ixpe-measures-exploded-star-remains"
								alt="/"
							>
								<Image
									className="rounded-xl"
									src="/assets/iotd_images/iotd_1.jpeg"
									width="480px"
									height="360px"
									alt="/"
								/>
							</Link>
							<QuoteItem
								quote="When a massive star collapsed in the Cassiopeia constellation, it generated a supernova explosion with some of the fastest shockwaves in the Milky Way. These speedy shock waves are one of the reasons the Cassiopeia A (Cas A) supernova remnant was chosen to be our Imaging X-ray Polarimetry Explorer’s (IXPE) first observed object."
								author="NASA"
							/>
						</div>
						<div class="w-full rounded hover:-translate-y-1 hover:cursor-pointer">
							<Link
								href="https://www.nasa.gov/image-feature/curiositys-dusty-selfie/"
								alt="/"
							>
								<Image
									className="rounded-xl"
									src="/assets/iotd_images/iotd_2.png"
									width="480px"
									height="360px"
									alt="/"
								/>
							</Link>
							<QuoteItem
								quote="Today marks 10 years since the Curiosity rover landed on Mars. Since August 2012, Curiosity has been exploring 3-mile-high Mt. Sharp in Gale Crater. The rover has climbed more than 2,000 feet (612 meters), reaching progressively younger rocks that serve as a record on how Mars has evolved from a wet, habitable planet to a cold desert environment."
								author="NASA"
							/>
						</div>
						<div class="w-full rounded hover:-translate-y-1 hover:cursor-pointer">
							<Link
								href="https://www.nasa.gov/image-feature/goddard/2022/hubble-peers-at-mysterious-cosmic-keyhole"
								alt="/"
							>
								<Image
									className="rounded-xl"
									src="/assets/iotd_images/iotd_3.jpg"
									width="480px"
									height="360px"
									alt="/"
								/>
							</Link>
							<QuoteItem
								quote="This peculiar portrait from the NASA/ESA Hubble Space Telescope showcases NGC 1999, a reflection nebula in the constellation Orion. NGC 1999 is around 1,350 light-years from Earth and lies near the Orion Nebula, the closest region of massive star formation to Earth. NGC 1999 itself is a relic of recent star formation – it is composed of debris left over from the formation of a newborn star."
								author="NASA"
							/>
						</div>
					</div>

					<Link href="/#main">
						<p className="pt-4 underline cursor-pointer">Back</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default iotd;
