import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";
import axios from "axios";
import AuthHandler from "../components/authHandler";

const Auth = ({ access_token }) => {
	const router = useRouter();
	const { code, state } = router.query;

	useEffect(() => {
		if (access_token && state) {
			router.push("/" + state);
		}
	}, [access_token, state]);

	return (
		<Container>
			<Head>
				<title>Authorizing user... | hfsbs</title>
			</Head>

			<AuthHandler access_token={access_token} state={state} />
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
