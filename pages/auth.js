import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";
import axios from "axios";
import { clientID, secretID } from "../keys";

const Auth = ({ access_token }) => {
	const router = useRouter();
	const { code, state } = router.query;

	if (access_token) {
		SetAccessToken(access_token);
		console.log(access_token);
		window.location = state;
	}

	return (
		<Container>
			<Head>
				<title>Authorizing user... | hfsbs</title>
			</Head>
			{code ? (
				<code>
					Code: {code}, state: {state}
				</code>
			) : (
				<code>Error code 500: Authorization code not found.</code>
			)}
		</Container>
	);
};

export async function getServerSideProps(context) {
	const { code, state } = context.req.__NEXT_INIT_QUERY;

	const res = await axios.post("https://hackforums.net/api/v2/authorize", {
		grant_type: "authorization_code",
		client_id: clientID,
		client_secret: secretID,
		code: code,
	});

	return {
		props: {
			access_token: res.data["access_token"],
		},
	};
}

const SetAccessToken = (newToken) => {
	const [cookies, setCookie] = useCookies(["access_token"]);
	setCookie("access_token", newToken, { path: "/" });
};

export default Auth;
