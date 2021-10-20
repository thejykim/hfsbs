import { useRouter } from "next/router";
import Thread from "../components/thread";
import { Container, Spinner } from "reactstrap";

const Action = ({ clientID }) => {
	const router = useRouter();
	const { action, tid } = router.query;

	return (
		<div>
			<Container>
				{router.isReady ? (
					action && tid ? (
						<Thread action={action} tid={tid} clientID={clientID} />
					) : (
						<p>Whoops! Looks like your link is broken.</p>
					)
				) : (
					<div className="d-flex justify-content-center">
						<Spinner color="light" />
					</div>
				)}
			</Container>
		</div>
	);
};

export async function getStaticProps(context) {
	const clientID = process.env.CLIENT_ID;

	return {
		props: {
			clientID: clientID,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default Action;
