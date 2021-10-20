import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";
import axios from "axios";

const Auth = ({ access_token }) => {
	const router = useRouter();
	const { code, state } = router.query;

	if (access_token) {
		SetAccessToken(access_token);
		console.log(access_token);
		Router.push("/" + state);
	}

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

export async function getServerSideProps(context) {
	try {
		const { code, state } = context.req.__NEXT_INIT_QUERY;

		const res = await axios.get(
			"http://hfsbs.x10.mx/hf-auth.php?code=" + code + "&state=" + state
		);

		return {
			props: {
				access_token: res.data["access_token"],
			},
		};
	} catch (error) {
		return {
			props: {
				access_token: null,
			},
		};
	}
}

const SetAccessToken = (newToken) => {
	const [cookies, setCookie] = useCookies(["access_token"]);
	setCookie("access_token", newToken, { path: "/" });
};

export default Auth;
