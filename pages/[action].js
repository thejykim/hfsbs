import { useRouter } from "next/router";
import Thread from "../components/thread";

const Action = ({ clientID }) => {
	const router = useRouter();
	const { action, tid } = router.query;

	if ((action == null) | (tid == null)) {
		return <p>Whoops! Looks like your link is broken.</p>;
	} else {
		return <Thread action={action} tid={tid} clientID={clientID} />;
	}
};

export async function getStaticProps(context) {
	const clientID = process.env.CLIENT_ID;
	console.log(clientID);

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
