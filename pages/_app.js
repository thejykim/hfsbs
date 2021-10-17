import "bootswatch/dist/darkly/bootstrap.min.css";
import "../styles/globals.css";
import AppNavbar from "../components/navbar";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
	return (
		<CookiesProvider>
			<AppNavbar />
			<Component {...pageProps} />
		</CookiesProvider>
	);
}

export default MyApp;
