import Head from "next/head";
import { Container } from "reactstrap";
import { useCookies } from "react-cookie";

const Thread = ({ action, tid, clientID }) => {
	if (GetAccessToken()) {
		return (
			<div>
				<Head>
					<title>Thread | hfsbs</title>
				</Head>
				<Container>
					<p>
						Action: <code>{action}</code>, thread: <code>{tid}</code>.
						That&apos;s insightful.
					</p>
				</Container>
			</div>
		);
	} else {
		window.location = `https://hackforums.net/api/v2/authorize?response_type=code&client_id=${clientID}&state=${action}?tid=${tid}`;
		return (
			<div>
				<Head>
					<title>Thread | hfsbs</title>
				</Head>
				<Container>
					<p>You haven&apos;t been authenticated yet. Redirecting now!</p>
				</Container>
			</div>
		);
	}
};

const GetAccessToken = () => {
	const [cookies, setCookie] = useCookies(["access_token"]);

	return cookies.access_token;
};

const GetNewToken = () => {};

export default Thread;
