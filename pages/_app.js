import Navbar from "../components/Navbar";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			{!Component.hideHeader && <Navbar />}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
