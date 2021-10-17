import Head from "next/head";
import { Button, Container } from "reactstrap";

export default function Home() {
	return (
		<div>
			<Head>
				<title>hfsbs | Tools for HF</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<p>Hello!</p>
			</Container>
		</div>
	);
}
