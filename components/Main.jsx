import React from "react";
import Image from "next/image";

const Main = () => {
	return (
		<div
			id="main"
			className="w-full md:h-screen p-2 flex items-center"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-2 pt-[20px]">
				<div className="col-span-1">
					<p className="uppercase text-xl tracking-widest text-gray-400 mt-[80px] font-bold">
						Space
					</p>
					<h2 className="py-2 text-[#484888]">The Final Frontier</h2>
					<div className="ml-4">
						<p className="py-2 text-gray-800">
							Space exploration began only 60 years ago and look at where we are
							now! The first man in space was Russian cosmonaut Yuri Gagarin. He
							completed one orbit of the Earth and beat the Americans to space
							by only a few months. Some other famous firsts include the first
							satellite launched into space in 1957. The first animal in space
							was Laika the dog, also in 1957. John Glenn was the first American
							in space in 1962. Neil Armstrong was the first man to walk on the
							Moon in 1969. The first private commercial space mission happened
							in 2012 when SpaceX send an unmanned capsule with supplies to the
							International Space Station. Just last year, in 2021, the original
							captain of Star Trek's Enterprise, William Shatner, became the
							oldest person in space at the age of 90 years old. In 2013,
							Canadian Chris Hadfield created the first music video in space.
						</p>
						<p className="py-2 text-gray-800">
							Only 9 Canadians have ever been in space. Marc Garneau was the
							first to go to space in 1984. In 2013, Canadian Col. Chris
							Hadfield joined the crew of the International Space Station. He
							became famous during his mission to space by documenting the daily
							life of an astronaut (such as "how astronauts sleep") using social
							media and by sharing breathtaking photographs on his Twitter
							account. He also charmed his fans with his rendition of David
							Bowie's "Space Oddity".
						</p>
					</div>
					<div className="flex mt-10 pr-10 pl-4 p-0.5 mx[-180px] h-10">
						<div className="m-[1.1rem] w-[300px] mx-[-180px] p-0.5 bg-[#484888] "></div>
						<div className="w-[310px] bg-[#484888] shadow-lg"></div>
					</div>
				</div>
				<div className="col-span-1 flex ml-6 -skew-y-6 drop-shadow-md scale-[80%]">
					<Image
						className="rounded-xl bg-[#484888]"
						src="/assets/crew_ready.jpg"
						width="1465px"
						height="1041px"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
