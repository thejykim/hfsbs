import Head from "next/head";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const AuthHandler = ({ access_token, state }) => {
	const router = useRouter();
	const [accessCookie, setAccessCookie] = useCookies(["access_token"]);

	setAccessCookie("access_token", newToken, { path: "/" });
	setTimeout(() => {
		router.push("/" + state);
	}, 1000);

	return (
		<Container>
			<Head>
				<title>Authorizing user... | hfsbs</title>
			</Head>
			{access_token ? (
				<code>Success! Redirecting you back...</code>
			) : (
				<code>Error code 500: Authorization code not found.</code>
			)}
		</Container>
	);
};
