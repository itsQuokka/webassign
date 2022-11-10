import Head from "next/head";
import Main from "../components/Main";
import Quotes from "../components/Quotes";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Space Place | Aidan Douglas</title>
				<meta
					name="description"
					content="Space Web Assignment"
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
