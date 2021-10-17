import { Container } from "reactstrap";
import { useCookies } from "react-cookie";

const Thread = ({ action, tid }) => {
	return (
		<div>
			<Container>
				<p>
					Action: {action}, thread: {tid}
				</p>
			</Container>
		</div>
	);
};

const GetAccessToken = () => {
	const [cookies, setCookie] = useCookies(["access_token"]);

	function onChange(newToken) {
		setCookie("access_token", newToken, { path: "/" });
	}

	if (cookies.access_token) {
		return cookies.access_token;
	} else {
	}
};

const GetNewToken = () => {};

export default Thread;
