import Head from "next/head";
import Main from "../components/Main";
import Quotes from "../components/Quotes";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Aidan | Front-End Developer</title>
				<meta
					name="description"
					content="Portfolio Project"
				/>
				<link
					rel="icon"
					className="bg-white"
					href="/assets/logo.png"
				/>
			</Head>

			<Main />
			<Quotes />
		</div>
	);
}
