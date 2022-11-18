import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/night-sky.jpg";
import Link from "next/link";
import Head from "next/head";

const references = () => {
	return (
		<div className="w-full">
			<Head>
				<title>References | Space Assign</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
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
					<h2>Reference Page</h2>

					<h4 className="pt-4">Main Page Crew Picture</h4>
					<p>
						https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/714994main_exp_34_crew_ready_full_full.jpg
					</p>
					<h4 className="pt-4">Astronaut Main Page</h4>
					<p>https://www.pinterest.ca/pin/343751384064224318/</p>

					<h4 className="pt-4">Moon</h4>
					<p>https://gifer.com/en/XcFC</p>

					<h4 className="pt-4">Moon Banner</h4>
					<p>
						https://www.mainejewish.org/wp-content/uploads/2017/07/Moon-Banner.jpg
					</p>

					<h4 className="pt-4">All Planet Pictures from Solar System Page</h4>
					<p>https://nineplanets.org/</p>

					<h4 className="pt-4">Image of the Day Banner</h4>
					<p>
						https://www.freepik.com/free-vector/space-banner-with-purple-planet-landscape_13778479.htm
					</p>

					<h4 className="pt-4">Cassiopeia A Supernova</h4>
					<p>
						https://www.nasa.gov/image-feature/ixpe-measures-exploded-star-remains/
					</p>

					<h4 className="pt-4">Curiosity Rover Selfie</h4>
					<p>https://www.nasa.gov/image-feature/curiositys-dusty-selfie/</p>

					<h4 className="pt-4">Orion Constellation</h4>
					<p>
						https://www.nasa.gov/image-feature/goddard/2022/hubble-peers-at-mysterious-cosmic-keyhole/
					</p>

					<h4 className="pt-4">Space Galaxy Background for Banner</h4>
					<p>
						https://www.freepik.com/free-vector/space-banner-with-purple-planet-landscape_13778479.htm
					</p>

					<h4 className="pt-4">Astronaut in Banner</h4>
					<p>
						https://www.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_20057099.htm#query=astronaut&position=7&from_view=keyword
					</p>

					<h4 className="pt-4">Space Rover in Banner</h4>
					<p>
						https://www.freepik.com/free-vector/mars-colonization-composition-with-image-wheeled-rover-with-manipulator-antenna-solar-battery-vector-illustration_23547861.htm#query=space%20rover&position=0&from_view=search&track=sph
					</p>
					<Link href="/references">
						<p className="pt-4 underline cursor-pointer">Back to Top</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default references;
