import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sanityClient from "../sanityClient";

const Home: NextPage = ({ posts }) => {
	// console.log(posts);
	return (
		<main>
			{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
			<h1>================= Posts =====================</h1>
			{posts.map((post) => (
				<>
					<article key={post._id}>
						<h2>
							<Link href={`/blog/${post.slug}`}>
								<a>{post.title}</a>
							</Link>
						</h2>
					</article>
					<hr></hr>
				</>
			))}
		</main>
	);
};

export async function getStaticProps() {
	const posts = await sanityClient.fetch(`
	*[_type == 'posts']
	{
		_id,
		'slug': slug.current,
		title,
		cover,
		resumo
	}
	`);

	return {
		props: {
			posts,
		},
	};
}

export default Home;
