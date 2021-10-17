import { useRouter } from "next/router";
import { Container } from "reactstrap";

const Auth = () => {
	const router = useRouter();
	const { code, state } = router.query;

	return (
		<Container>
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

export default Auth;
